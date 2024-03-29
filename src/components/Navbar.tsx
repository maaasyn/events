import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { UserAvatar } from "@/components/UserAvatar";
import { CommandMenu } from "@/components/ui/command-menu";

const Navbar = async () => {
  return (
    <nav className="bg-gray-50 dark:bg-gray-900 py-4 px-6 flex items-center justify-between">
      <div className="text-gray-800 dark:text-white text-xl font-bold">
        <Link href={"/"}>Connectoo</Link>
      </div>
      <div className="flex-grow mx-8">
        <div className="relative text-gray-600 dark:text-white">
          <CommandMenu />
          {/* <input
            type="search"
            name="search"
            placeholder="Search for everything"
            className="bg-white dark:bg-gray-700 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <FaSearch />
          </button> */}
        </div>
      </div>
      {/* @ts-expect-error Server Component */}
      <UserAvatar />
    </nav>
  );
};

export default Navbar;
