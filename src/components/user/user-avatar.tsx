import { User } from "firebase/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface UserAvatarProps {
  user: User
  size?: "sm" | "lg"
}

export function UserAvatar({ user, size = "sm" }: UserAvatarProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    lg: "h-12 w-12"
  }

  return (
    <Avatar 
      className={cn(sizeClasses[size])}
      data-testid="user-avatar"
    >
      <AvatarImage 
        src={user.photoURL || undefined} 
        alt={user.displayName || "用户头像"}
        role="img"
        aria-label={user.displayName || "用户头像"}
      />
      <AvatarFallback>
        {user.displayName?.[0] || "用"}
      </AvatarFallback>
    </Avatar>
  )
}
