"use client";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  HomeIcon,
  NewspaperIcon,
  PlusCircleIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        className={
          "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        }
        onClick={() => setOpen((o) => !o)}>
        <span>Type a command or search...</span>
        <kbd className="pointer-events-none top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem
              onSelect={() => {
                router.push("/profile");
                setOpen((x) => !x);
              }}>
              <UserIcon className="mr-2 h-4 w-4" />
              Profile
            </CommandItem>

            <CommandItem
              onSelect={() => {
                router.push("/feed");
                setOpen((x) => !x);
              }}>
              <NewspaperIcon className="mr-2 h-4 w-4" />
              Feed
            </CommandItem>

            <CommandItem
              onSelect={() => {
                router.push("/");
                setOpen((x) => !x);
              }}>
              <HomeIcon className="mr-2 h-4 w-4" />
              Home
            </CommandItem>

            <CommandItem
              onSelect={() => {
                router.push("/create-gather");
                setOpen((x) => !x);
              }}>
              <PlusCircleIcon className="mr-2 h-4 w-4" />
              Create gathering
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
