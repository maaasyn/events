"use client";

import { signIn } from "next-auth/react";
import { MdAccountCircle } from "react-icons/md";

export const SignIn = () => {
  return <MdAccountCircle onClick={() => signIn()} size={30} />;
};
