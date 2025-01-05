import { Metadata } from "next";
import Link from "next/link";
import { GoogleAuthButton } from "@/components/ui/google-auth-button";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SignUpForm } from "./signup-form";

export const metadata: Metadata = {
  title: "Sign Up - Zhongwen Advantage",
  description: "Create a new account to get started with Zhongwen Advantage",
};

export default function SignUpPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SignUpForm />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <GoogleAuthButton mode="signup" />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="text-sm text-muted-foreground text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </div>
          <Button variant="outline" asChild className="w-full">
            <Link href="/">Back to home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
