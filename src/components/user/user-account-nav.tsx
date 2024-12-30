"use client"

import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import { Loader2 } from "lucide-react"

export function UserAccountNav() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <Button variant="ghost" size="sm" disabled>
        <Loader2 className="h-4 w-4 animate-spin" data-testid="loading-spinner" />
      </Button>
    )
  }

  if (!user) {
    return (
      <Link href="/login">
        <Button variant="ghost" size="sm">
          登录
        </Button>
      </Link>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger aria-label="用户头像">
        <Avatar className="h-8 w-8" data-testid="user-avatar">
          <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "用户头像"} />
          <AvatarFallback>{user.displayName?.[0] || "用"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.displayName && (
              <p className="font-medium">{user.displayName}</p>
            )}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild role="menuitem">
          <Link href="/dashboard">个人资料</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild role="menuitem">
          <Link href="/dashboard/settings">设置</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          role="menuitem"
          onSelect={(event) => {
            event.preventDefault()
            // TODO: Add signOut functionality
          }}
        >
          登出
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
