import { Metadata } from "next"
import Link from "next/link"
import { UserResetPassForm } from "@/components/user/user-reset-pass-form"

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your password",
}

export default function ForgotPasswordPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <UserResetPassForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/signin"
            className="hover:text-brand underline underline-offset-4"
          >
            Back to Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
