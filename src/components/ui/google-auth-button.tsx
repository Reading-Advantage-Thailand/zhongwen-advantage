"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { useToast } from "@/hooks/use-toast"

interface GoogleAuthButtonProps {
  mode: "signin" | "signup"
}

export function GoogleAuthButton({ mode }: GoogleAuthButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleGoogleAuth = async () => {
    setIsLoading(true)
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      
      toast({
        title: mode === "signin" ? "Signed in successfully" : "Account created successfully",
        description: "Welcome to Zhongwen Advantage!",
      })
      
      router.push("/")
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Authentication error",
        description: error.message || "Failed to authenticate with Google",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      type="button"
      disabled={isLoading}
      className="w-full"
      onClick={handleGoogleAuth}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.google className="mr-2 h-4 w-4" />
      )}
      {mode === "signin" ? "Sign in with Google" : "Sign up with Google"}
    </Button>
  )
}
