import NextAuth from "next-auth";

// const handler = NextAuth({});

// export { handler as GET, handler as POST };
export async function GET(request: Request) {
  return new Response("TODO: auth");
}
