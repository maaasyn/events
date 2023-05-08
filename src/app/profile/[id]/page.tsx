import { UserCard } from "@/components/UserCard";
import { PrismaClient } from "@prisma/client";
import React from "react";

const ProfilePage = async (props: { params: { id: string } }) => {
  const user = await new PrismaClient().user.findFirst({
    where: {
      id: props.params.id,
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
