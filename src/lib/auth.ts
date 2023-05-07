import { type NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import envs from "@/envs";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: envs.GITHUB_ID,
      clientSecret: envs.GITHUB_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: async ({ session, token, user }) => {
      if (user) {
        if (session?.user) {
          session.user.id = user.id;
        }
      }
      if (token) {
        if (session?.user) {
          session.user.id = token.sub;
        }
      }
      return session;
    },
  },
};
