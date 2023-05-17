import { AddGathering } from "@/components/client/AddGathering";
import { Editor } from "@/components/client/Editor";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

export default async function CreateGather() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-fit py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Create a Gather</h1>
        <div className="min-w-full mt-12">
          <AddGathering />
          <Editor />
        </div>
      </main>
    </div>
  );
}
