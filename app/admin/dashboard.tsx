"use client";
import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
  console.log(session);

  if (session?.user) {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <p>Welcome {session.user.email}!</p>
        <p>{session.user.name}</p>
        <img src={session.user.image as string} alt="" />
        <button onClick={() => signOut({ redirectTo: "/" })}>登出</button>
      </div>
    );
  }

  return <p>尚未登入, 請返回</p>;
}
