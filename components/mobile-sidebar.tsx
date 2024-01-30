"use client";

import { History, Home, Menu, Settings, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { SignedIn } from "@clerk/clerk-react";

export const MobileSideBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      icon: Home,
      href: "/",
      label: "Home",
      pro: false,
    },
  ];

  const onNavigate = (url: string, pro: boolean) => {
    return router.push(url);
  };
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
          <div className="p-3 flex-1 justify-center">
            <div className="space-y-4">
              {routes.map((route, index) => (
                <div
                  onClick={() => onNavigate(route.href, route.pro)}
                  key={route.href}
                  className={cn(
                    "text-muted-foreground text-sm group flex p-3 w-full font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition justify-center",
                    pathname === route.href && "bg-primary/10 text-primary"
                  )}
                >
                  <div className="flex flex-col gap-y-2 items-center flex-1">
                    <route.icon className="w-5 h-5" />
                    {route.label}
                  </div>
                </div>
              ))}
              <SignedOut>
              <Link href="/sign-in">
                <div className="space-y-2">
                  <div
                    className={
                      "text-muted-foreground text-sm group flex p-3 w-full font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition justify-center"
                    }
                  >
                    <div className="flex flex-col gap-y-2 items-center flex-1">
                      <User className="w-5 h-5" />
                      Sign In
                    </div>
                  </div>
                </div>
              </Link>
              </SignedOut>
              <SignedIn>
              <Link href="/history">
                <div className="space-y-2">
                  <div
                    className={
                      "text-muted-foreground text-sm group flex p-3 w-full font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition justify-center"
                    }
                  >
                    <div className="flex flex-col gap-y-2 items-center flex-1">
                      <History className="w-5 h-5" />
                      History
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/profile">
                <div className="space-y-2">
                  <div
                    className={
                      "text-muted-foreground text-sm group flex p-3 w-full font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition justify-center"
                    }
                  >
                    <div className="flex flex-col gap-y-2 items-center flex-1">
                      <User className="w-5 h-5" />
                      Profile
                    </div>
                  </div>
                </div>
              </Link>
              </SignedIn>
             
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
