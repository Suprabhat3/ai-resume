"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { login, signup } from "./actions";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const message = searchParams.get("message");
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [isLoading, setIsLoading] = useState(false);

  // We wrap the server actions in a small client handler to manage loading state
  // and pass the callbackUrl if needed.
  const handleAction = async (
    formData: FormData,
    action: typeof login | typeof signup,
  ) => {
    setIsLoading(true);
    await action(formData);
    // The server action redirects, so we mostly just set loading = true
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-zinc-50 dark:bg-black p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>
            Enter your email to login or create an account to save and download
            your resumes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="text-sm text-red-500 mb-4 bg-red-50 p-2 text-center rounded">
              {error}
            </div>
          )}
          {message && (
            <div className="text-sm text-green-500 mb-4 bg-green-50 p-2 text-center rounded">
              {message}
            </div>
          )}

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <Button
                formAction={(fd) => handleAction(fd, login)}
                type="submit"
                disabled={isLoading}
              >
                Log In
              </Button>
              <Button
                formAction={(fd) => handleAction(fd, signup)}
                variant="outline"
                type="submit"
                disabled={isLoading}
              >
                Sign Up
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t p-4 mt-4">
          <p className="text-sm text-muted-foreground text-center">
            Don't want to save right now? <br />
            <Link href="/" className="text-primary hover:underline">
              Return Home
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
