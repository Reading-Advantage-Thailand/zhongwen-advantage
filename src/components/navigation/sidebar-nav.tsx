"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { SidebarNavItem } from "@/types";

interface SidebarNavProps {
  items: SidebarNavItem[];
}

export function SidebarNav({ items }: SidebarNavProps) {
  const path = usePathname();
  const pathWithoutLocale = "/" + path.split("/").slice(2).join("/");

  if (!items?.length) {
    return null;
  }

  return (
    <>
      {pathWithoutLocale.startsWith("/settings") && (
        <button
          className="flex items-center space-x-2 text-sm text-gray-500 py-2 px-4"
          onClick={() => window.history.back()}
        >
          <Icons.close className="h-4 w-4" />
          Back
        </button>
      )}
      <nav className="flex flex-wrap lg:grid items-start gap-2 mb-4 lg:mb-0">
        {items.map((item: SidebarNavItem, index) => {
          // Only use icons that we've defined in our Icons component
          const Icon = item.icon && (Icons[item.icon as keyof typeof Icons] || Icons.book);
          
          return (
            item.href && (
              <Link
                id={item.id}
                key={index}
                href={item.disabled ? "/" : item.href}
              >
                <span
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathWithoutLocale.startsWith(item.href)
                      ? "bg-accent"
                      : "transparent",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {Icon && <Icon className="mr-2 h-4 w-4" />}
                  <span
                    className={cn(
                      "truncate capitalize",
                      !pathWithoutLocale.startsWith(item.href) &&
                        "group-hover:block sm:block",
                      pathWithoutLocale.startsWith(item.href)
                        ? "text-accent-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </span>
                </span>
              </Link>
            )
          );
        })}
      </nav>
    </>
  );
}
