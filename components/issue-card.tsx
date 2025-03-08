"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import IssueDetailsDialog from "./issue-details-dialog";
import UserAvatar from "./user-avatar";
import { useRouter } from "next/navigation";

interface Issue {
  id: string;
  title: string;
  status: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  assignee: { name: string; avatarUrl: string };
  createdAt: string;
}

interface IssueCardProps {
  issue: Issue;
  showStatus?: boolean;
  onDelete?: (id: string) => void;
  onUpdate?: (issue: Issue) => void;
}

const priorityColor: Record<Issue["priority"], string> = {
  LOW: "border-green-600",
  MEDIUM: "border-yellow-300",
  HIGH: "border-orange-400",
  URGENT: "border-red-400",
};

export default function IssueCard({
  issue,
  showStatus = false,
  onDelete = () => {}, // Fixed default function
  onUpdate = () => {}, // Fixed default function
}: IssueCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  const onDeleteHandler = (id: string) => {
    router.refresh();
    onDelete(id);
  };

  const onUpdateHandler = (updatedIssue: Issue) => {
    router.refresh();
    onUpdate(updatedIssue);
  };

  const created = formatDistanceToNow(new Date(issue.createdAt), {
    addSuffix: true,
  });

  const borderColor = priorityColor[issue.priority];

  return (
    <>
      <Card
        className="cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setIsDialogOpen(true)}
      >
        <CardHeader className={`border-t-2 ${borderColor} rounded-lg`}>
          <CardTitle>{issue.title}</CardTitle>
        </CardHeader>

        <CardContent className="flex gap-2 -mt-3">
          {showStatus && <Badge>{issue.status}</Badge>}
          <Badge variant="outline" className="-ml-1">
            {issue.priority}
          </Badge>
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-3">
          <UserAvatar user={issue.assignee} />
          <div className="text-xs text-gray-400 w-full">Created {created}</div>
        </CardFooter>
      </Card>

      {isDialogOpen && (
        <IssueDetailsDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          issue={issue}
          onDelete={() => onDeleteHandler(issue.id)} // Wrap with an arrow function
          onUpdate={() => onUpdateHandler(issue)}
          borderCol={borderColor}
        />
      )}
    </>
  );
}
