import type { Config } from "drizzle-kit";

console.log("Hello world");
export default {
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  //   connectionString: "postgres://postgres:postgres@localhost:5431",
  connectionString: process.env.DATABASE_URL,
} satisfies Config;
