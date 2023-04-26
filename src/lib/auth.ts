import { type NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import envs from "@/envs";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: envs.GITHUB_ID,
      clientSecret: envs.GITHUB_SECRET,
    }),
  ],
};
