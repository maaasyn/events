import { Button } from "@/components/ui/button";
import React from "react";
import { redirect } from "next/navigation";

export default async function CreateGather() {
  const addItem = async () => {
    "use server";
    redirect(
      `/projects/${Math.random().toString(36).substring(7)}/edit/basics`
    );
  };

  return (
    <form action={addItem}>
      <Button type="submit">Create Gather</Button>
    </form>
  );
}
