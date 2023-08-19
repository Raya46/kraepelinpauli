"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/theme-toggle";
import { usePathname, useRouter } from "next/navigation";
import { MobileSideBar } from "../mobile-sidebar";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const routes = [
    {
      href: "/",
      label: "Home",
      pro: false,
    },
    {
      href: "/history",
      label: "History",
      pro: false,
    },
  ];

  const onNavigate = (url: string, pro: boolean) => {
    return router.push(url);
  };

  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center w-full">
        <MobileSideBar />
        {/* <Menu className="block md:hidden" /> */}
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            KraepelinPauli
          </h1>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-x-3 w-full justify-end">
        {routes.map((route) => (
          <div
            onClick={() => onNavigate(route.href, route.pro)}
            key={route.href}
            className={cn(
              "text-muted-foreground text-sm group flex p-3 font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition justify-center",
              pathname === route.href && "bg-primary/10 text-primary"
            )}
          >
            {route.label}
          </div>
        ))}
        <SignedOut>
          <Link
            href="/sign-in"
            className="text-muted-foreground text-sm group p-3 font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition justify-center"
          >
            Sign In
          </Link>
        </SignedOut>
        <ModeToggle />
        <UserButton
          userProfileMode="navigation"
          userProfileUrl={
            typeof window !== "undefined"
              ? `${window.location.origin}/profile`
              : undefined
          }
          afterSignOutUrl="/"
        />
      </div>
    </div>
  );
};
