import { UserCard } from "@/components/UserCard";
import { PrismaClient } from "@prisma/client";
import React from "react";

const ProfilePage = async (props: { id: string }) => {
  const user = await new PrismaClient().user.findFirst({
    where: {
      id: props.id,
    },
  });
  return (
    <UserCard
      user={{
        email: user?.email,
        id: user?.id,
        image: user?.image,
        name: user?.name,
      }}
    />
  );
};
export default ProfilePage;
