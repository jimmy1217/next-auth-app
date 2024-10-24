import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, auth } = NextAuth({
  providers: [Google({})],
  callbacks: {
    jwt({ token, user }) {
      return token;
    },
    session({ session, token }) {
      return session;
    },
  },
});
