import { PrismaClient } from "@prisma/client";

const ProfilePage = async (props: { id: string }) => {
  const user = await new PrismaClient().user.findFirst({
    where: {
      id: props.id,
    },
  });
  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {user?.email}</p>
      <p>Username: {user?.name}</p>
      <p>Image: {user?.image}</p>
      <p>Id: {user?.id}</p>
    </div>
  );
};
export default ProfilePage;
