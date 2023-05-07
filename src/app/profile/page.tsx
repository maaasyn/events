import { getCurrentUser } from "@/lib/session";

const MyProfilePage = async () => {
  const user = await getCurrentUser();
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
export default MyProfilePage;
