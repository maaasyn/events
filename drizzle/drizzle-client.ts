import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const queryConnection = postgres(process.env.DATABASE_URL!);

export const db = drizzle(queryConnection, { schema });

export type DbClient = typeof db;

export type Schema = typeof schema;
