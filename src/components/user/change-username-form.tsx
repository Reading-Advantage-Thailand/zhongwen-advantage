"use client"

import { useState } from "react"
import { User, updateProfile } from "firebase/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

const usernameSchema = z.object({
  username: z
    .string()
    .min(1, { message: "用户名不能为空" })
    .max(30, { message: "用户名不能超过30个字符" })
    .regex(/^[a-zA-Z0-9\u4e00-\u9fa5]+$/, {
      message: "用户名只能包含中文、英文和数字",
    }),
})

type UsernameValues = z.infer<typeof usernameSchema>

interface ChangeUsernameFormProps {
  user: User
}

export function ChangeUsernameForm({ user }: ChangeUsernameFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<UsernameValues>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      username: user.displayName || "",
    },
  })

  async function onSubmit(data: UsernameValues) {
    setIsLoading(true)
    try {
      await updateProfile(user, {
        displayName: data.username,
      })
    } catch (error) {
      console.error(error)
      form.setError("username", {
        message: "更新用户名失败，请重试",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>用户名</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" data-testid="loading-spinner" />
          )}
          更新
        </Button>
      </form>
    </Form>
  )
}
