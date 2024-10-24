"use client";
import { signIn } from "next-auth/react";

export function SignIn() {
  return (
    <button onClick={() => signIn("google", { redirectTo: "/admin" })}>
      登入 google
    </button>
  );
}
