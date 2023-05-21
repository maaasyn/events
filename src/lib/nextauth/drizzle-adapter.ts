// https://github.com/nextauthjs/next-auth/pull/7165/files#diff-589de1cda5f07a72f8e4fda3e13d4793772e62e14bc198fd5b0529822bc8a1c1
// import { and, eq } from "drizzle-orm";
// import type { Adapter } from "next-auth/adapters";
// import { v4 as uuid } from "uuid";
// import { DbClient, Schema2 } from "../../../drizzle/drizzle-client";

// /**
//  * ## Setup
//  *
//  * Add this adapter to your `pages/api/[...nextauth].js` next-auth configuration object:
//  *
//  * ```js title="pages/api/auth/[...nextauth].js"
//  * import NextAuth from "next-auth"
//  * import GoogleProvider from "next-auth/providers/google"
//  * import { DrizzleAdapter } from "@next-auth/drizzle-adapter"
//  * import { db } from "./db-schema"
//  *
//  * export default NextAuth({
//  *   adapter: DrizzleAdapter(db),
//  *   providers: [
//  *     GoogleProvider({
//  *       clientId: process.env.GOOGLE_CLIENT_ID,
//  *       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//  *     }),
//  *   ],
//  * })
//  * ```
//  *
//  * ## Advanced usage
//  *
//  * ### Create the Drizzle schema from scratch
//  *
//  * You'll need to create a database schema that includes the minimal schema for a `next-auth` adapter.
//  * Be sure to use the Drizzle driver version that you're using for your project.
//  *
//  * > This schema is adapted for use in Drizzle and based upon our main [schema](https://authjs.dev/reference/adapters#models)
//  *
//  *
//  * ```json title="db-schema.ts"
//  *
//  * import { integer, pgTable, text, primaryKey } from 'drizzle-orm/pg-core';
//  * import { drizzle } from 'drizzle-orm/node-postgres';
//  * import { migrate } from 'drizzle-orm/node-postgres/migrator';
//  * import { Pool } from 'pg'
//  * import { ProviderType } from 'next-auth/providers';
//  *
//  * export const users = pgTable('users', {
//  * id: text('id').notNull().primaryKey(),
//  * name: text('name'),
//  * email: text("email").notNull(),
//  * emailVerified: integer("emailVerified"),
//  * image: text("image"),
//  * });
//  *
//  * export const accounts = pgTable("accounts", {
//  *  userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
//  *  type: text("type").$type<ProviderType>().notNull(),
//  *  provider: text("provider").notNull(),
//  *  providerAccountId: text("providerAccountId").notNull(),
//  *  refresh_token: text("refresh_token"),
//  *  access_token: text("access_token"),
//  *  expires_at: integer("expires_at"),
//  *  token_type: text("token_type"),
//  *  scope: text("scope"),
//  *  id_token: text("id_token"),
//  *  session_state: text("session_state"),
//  * }, (account) => ({
//  *   _: primaryKey(account.provider, account.providerAccountId)
//  * }))
//  *
//  * export const sessions = pgTable("sessions", {
//  *  userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
//  *  sessionToken: text("sessionToken").notNull().primaryKey(),
//  *  expires: integer("expires").notNull(),
//  * })
//  *
//  * export const verificationTokens = pgTable("verificationToken", {
//  *  identifier: text("identifier").notNull(),
//  *  token: text("token").notNull(),
//  *  expires: integer("expires").notNull()
//  * }, (vt) => ({
//  *   _: primaryKey(vt.identifier, vt.token)
//  * }))
//  *
//  * const pool = new Pool({
//  *   connectionString: "YOUR_CONNECTION_STRING"
//  * });
//  *
//  * export const db = drizzle(pool);
//  *
//  * migrate(db, { migrationsFolder: "./drizzle" })
//  *
//  * ```
//  *
//  **/
// export function DrizzleAdapterPg(
//   client: DbClient,
//   { user, session, verificationToken, account }: Schema2
// ): Adapter {
//   return {
//     createUser: async (data) => {
//       return client
//         .insert(user)
//         .values({ ...data, id: uuid() })
//         .returning()
//         .then((res) => res[0]);
//     },
//     getUser: async (data) => {
//       return (
//         client
//           .select()
//           .from(user)
//           .where(eq(user.id, data))
//           .then((res) => res[0]) ?? null
//       );
//     },
//     getUserByEmail: async (data) => {
//       return (
//         client
//           .select()
//           .from(user)
//           .where(eq(user.email, data))
//           .then((res) => res[0]) ?? null
//       );
//     },
//     createSession: async (data) => {
//       return client
//         .insert(session)
//         .values(data)
//         .returning()
//         .then((res) => res[0]);
//     },
//     getSessionAndUser: async (data) => {
//       return (
//         client
//           .select({
//             session: session,
//             user: user,
//           })
//           .from(session)
//           .where(eq(session.sessionToken, data))
//           .innerJoin(user, eq(user.id, session.userId))
//           .then((res) => res[0]) ?? null
//       );
//     },
//     updateUser: async (data) => {
//       if (!data.id) {
//         throw new Error("No user id.");
//       }

//       return client
//         .update(user)
//         .set(data)
//         .where(eq(user.id, data.id))
//         .returning()
//         .then((res) => res[0]);
//     },
//     updateSession: async (data) => {
//       return client
//         .update(session)
//         .set(data)
//         .where(eq(session.sessionToken, data.sessionToken))
//         .returning()
//         .then((res) => res[0]);
//     },
//     linkAccount: async (rawAccount) => {
//       const updatedAccount = await client
//         .insert(account)
//         .values(rawAccount)
//         .returning()
//         .then((res) => res[0]);

//       // Drizzle will return `null` for fields that are not defined.
//       // However, the return type is expecting `undefined`.
//       const account: ReturnType<Adapter["linkAccount"]> = {
//         ...updatedAccount,
//         access_token: updatedAccount.access_token ?? undefined,
//         token_type: updatedAccount.token_type ?? undefined,
//         id_token: updatedAccount.id_token ?? undefined,
//         refresh_token: updatedAccount.refresh_token ?? undefined,
//         scope: updatedAccount.scope ?? undefined,
//         expires_at: updatedAccount.expires_at ?? undefined,
//         session_state: updatedAccount.session_state ?? undefined,
//       };

//       return account;
//     },
//     getUserByAccount: async (account) => {
//       const user =
//         (await client
//           .select()
//           .from(user)
//           .innerJoin(
//             account,
//             and(
//               eq(account.providerAccountId, account.providerAccountId),
//               eq(account.provider, account.provider)
//             )
//           )
//           .then((res) => res[0])) ?? null;

//       return user.users;
//     },
//     deleteSession: async (sessionToken) => {
//       await client
//         .delete(session)
//         .where(eq(session.sessionToken, sessionToken));
//     },
//     createVerificationToken: async (token) => {
//       return client
//         .insert(verificationToken)
//         .values(token)
//         .returning()
//         .then((res) => res[0]);
//     },
//     useVerificationToken: async (token) => {
//       try {
//         return (
//           client
//             .delete(verificationToken)
//             .where(
//               and(
//                 eq(verificationToken.identifier, token.identifier),
//                 eq(verificationToken.token, token.token)
//               )
//             )
//             .returning()
//             .then((res) => res[0]) ?? null
//         );
//       } catch (err) {
//         throw new Error("No verification token found.");
//       }
//     },
//     deleteUser: async (id) => {
//       await client
//         .delete(user)
//         .where(eq(user.id, id))
//         .returning()
//         .then((res) => res[0]);
//     },
//     unlinkAccount: async (account) => {
//       await client
//         .delete(account)
//         .where(
//           and(
//             eq(account.providerAccountId, account.providerAccountId),
//             eq(account.provider, account.provider)
//           )
//         );

//       return undefined;
//     },
//   };
// }
