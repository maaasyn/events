import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCurrentUser } from "@/lib/session";
import { UserIcon } from "lucide-react";

export const UserCard = (props: {
  user: Awaited<ReturnType<typeof getCurrentUser>>;
}) => {
  const user = props.user;
  return (
    <div className="max-w-md mx-auto my-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user?.image ?? ""} alt="avatar" />
          <AvatarFallback>
            <UserIcon />
          </AvatarFallback>
        </Avatar>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Profile
          </div>
          <p className="mt-2 text-gray-500">
            <span className="font-semibold">Email:</span> {user?.email}
          </p>
          <p className="mt-2 text-gray-500">
            <span className="font-semibold">Username:</span> {user?.name}
          </p>
          <p className="mt-2 text-gray-500">
            <span className="font-semibold">Id:</span> {user?.id}
          </p>
        </div>
      </div>
    </div>
  );
};
