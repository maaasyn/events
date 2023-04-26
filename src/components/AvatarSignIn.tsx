import { SignIn } from "@/components/SignIn";
import { getCurrentUser } from "@/lib/session";

export const AvatarSignIn = async () => {
  const user = await getCurrentUser();
  return (
    <div>
      <button
        type="button"
        // onClick={() => signIn()}
        className="text-gray-800 dark:text-white">
        {user ? (
          <img
            className="h-10 w-10 rounded-full"
            src={user?.image!}
            alt="Avatar"
          />
        ) : (
          <SignIn />
        )}
      </button>
    </div>
  );
};
