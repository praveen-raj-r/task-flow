import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { shadesOfPurple } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Flow",
  description:
    "TaskFlow is a powerful project management tool for task tracking, agile workflows, and team collaboration. Stay organized and boost productivity effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: "#3b82f6",
          colorBackground: "#1a202c",
          colorInputBackground: "#2D3748",
          colorInputText: "#F3F4F6",
        },
        elements: {
          formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
          card: "bg-gray-800",
          headerTitle: "text-blue-400",
          headerSubtitle: "text-gray-400",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} animated-dotted-background`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
