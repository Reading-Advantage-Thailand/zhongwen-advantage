"use client";

import Link from "next/link";
import { MainNavItem } from "@/types";
import { cn } from "@/lib/utils";
import { useSelectedLayoutSegment } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/use-auth";
import { getAuth, signOut } from "firebase/auth";
import { Icons } from "@/components/icons";

interface MobileNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  const segment = useSelectedLayoutSegment();
  const { user, loading } = useAuth();

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
      <div className="relative z-20 grid gap-6 rounded-md bg-white p-4 shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {!loading && (
          <div className="border-t pt-4">
            {user ? (
              <div className="space-y-4">
                <div className="flex items-center gap-4 px-2">
                  <Avatar>
                    <AvatarImage src={user.photoURL || undefined} />
                    <AvatarFallback>
                      {user.displayName
                        ? user.displayName.charAt(0).toUpperCase()
                        : user.email?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {user.displayName || "User"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {user.email}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link href="/profile">
                      <Icons.user className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link href="/dashboard">
                      <Icons.dashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link href="/settings">
                      <Icons.settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-500 hover:text-red-500 hover:bg-red-50"
                    onClick={handleSignOut}
                  >
                    <Icons.logout className="mr-2 h-4 w-4" />
                    Log out
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Button variant="ghost" asChild className="w-full justify-start">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="w-full justify-start">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
