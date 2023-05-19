import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

export default async function CreateGather(props: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  return (
    <main className="flex flex-col items-center p-4 md:w-3/4 w-full m-auto">
      {props.children}
    </main>
  );
}
