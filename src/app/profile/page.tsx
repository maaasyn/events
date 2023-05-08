import { getCurrentUser } from "@/lib/session";
import { UserCard } from "../../components/UserCard";

const MyProfilePage = async () => {
  const user = await getCurrentUser();
  return <UserCard user={user} />;
};
export default MyProfilePage;
