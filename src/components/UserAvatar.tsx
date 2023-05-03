import { AvatarPopOver } from "@/components/client/AvatarPopover";
import { getCurrentUser } from "@/lib/session";

export const UserAvatar = async () => {
  const user = await getCurrentUser();
  return <AvatarPopOver user={user} />;
};
