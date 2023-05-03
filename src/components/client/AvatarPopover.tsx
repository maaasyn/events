"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getCurrentUser } from "@/lib/session";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";

export const AvatarPopOver = (props: {
  user: Awaited<ReturnType<typeof getCurrentUser>>;
}) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <button type="button" className="text-gray-800 dark:text-white">
            {props.user ? (
              <img
                className="h-10 w-10 rounded-full"
                src={props?.user?.image!}
                alt="Avatar"
              />
            ) : (
              <MdAccountCircle size={30} />
            )}
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col space-y-4">
            {props.user ? (
              <>
                <Link
                  href={"/create-gather"}
                  className="text-gray-800 dark:text-white"
                  type="button">
                  Create Gather
                </Link>
                <button type="button" className="text-gray-800 dark:text-white">
                  Profile 🙅‍♀️
                </button>
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="text-gray-800 dark:text-white">
                  Sign Out
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => signIn()}
                className="text-gray-800 dark:text-white">
                Sign In
              </button>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
