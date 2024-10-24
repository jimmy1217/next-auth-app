import { SessionProvider } from "next-auth/react";
import Dashboard from "./dashboard";

export default function Pages() {
  return (
    <SessionProvider>
      <Dashboard />
    </SessionProvider>
  );
}
