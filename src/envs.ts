import { z } from "zod";

const schema = z.object({
  //   NODE_ENV: z.string(),
  PORT: z.string(),
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string(),
});

export const envs = schema.parse({
  GITHUB_ID: process.env.GITHUB_ID,
  GITHUB_SECRET: process.env.GITHUB_SECRET,
  PORT: process.env.PORT,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
} as z.infer<typeof schema>);

export default envs;
