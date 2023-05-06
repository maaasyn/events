"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCurrentUser } from "@/lib/session";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, PlusCircle, Github, User } from "lucide-react";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const AvatarPopOver = (props: {
  user: Awaited<ReturnType<typeof getCurrentUser>>;
}) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={props.user?.image!} alt="avatar" />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          {props.user && (
            <>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {props.user?.name}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {props.user?.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
            </>
          )}

          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile ❌</span>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/create">
                <PlusCircle className="mr-2 h-4 w-4" />
                <span>Create gathering</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          {!props.user ? (
            <DropdownMenuItem>
              <Github className="mr-2 h-4 w-4" />
              <span onClick={() => signIn("github")}>Sign in</span>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <button onClick={() => signOut()}>Log out</button>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
