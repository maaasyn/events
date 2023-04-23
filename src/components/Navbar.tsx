import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-4 px-6 flex items-center justify-between">
      <div className="text-gray-800 text-xl font-bold">MyLogo</div>
      <div className="flex-grow mx-8">
        <div className="relative text-gray-600">
          <input
            type="search"
            name="search"
            placeholder="Search for everything"
            className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <FaSearch />
          </button>
        </div>
      </div>
      <div>
        <button type="button" className="text-gray-800">
          <MdAccountCircle size={30} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
