import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import UserMenu from "@/components/user-menu";
import { PenBox } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { checkUser } from "@/lib/check-user";

const Header = async () => {
  await checkUser();

  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src={"/logo2.png"}
            alt="task-flow logo"
            width={200}
            height={56}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/project/create">
            <Button variant="destructive">
              <PenBox size={18} />
              <span> Create project</span>
            </Button>
          </Link>

          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
