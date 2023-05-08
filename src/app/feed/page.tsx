import Image from "next/image";
import { FiMapPin, FiUsers } from "react-icons/fi";
import { Event, getEvents } from "@/server/getEvents";
import Link from "next/link";
import { faker } from "@faker-js/faker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { HeartIcon, LayoutGrid, Library, Mic2, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Radio } from "lucide-react";
import { ListMusic } from "lucide-react";
import { Music2 } from "lucide-react";
import { User } from "lucide-react";
import { FeedTile } from "@/components/client/FeedTile";

const Sidebar = () => {
  return (
    <div className="Kill me">
      <div className={cn("pb-12")}>
        <div className="space-y-4 py-4">
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
              Discover
            </h2>
            <div className="space-y-1">
              <Button
                variant="secondary"
                size="sm"
                className="w-full justify-start">
                <PlayCircle className="mr-2 h-4 w-4" />
                Listen Now
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start">
                <LayoutGrid className="mr-2 h-4 w-4" />
                Browse
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start">
                <Radio className="mr-2 h-4 w-4" />
                Radio
              </Button>
            </div>
          </div>
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
              Library
            </h2>
            <div className="space-y-1">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start">
                <ListMusic className="mr-2 h-4 w-4" />
                Playlists
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start">
                <Music2 className="mr-2 h-4 w-4" />
                Songs
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Made for You
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start">
                <Mic2 className="mr-2 h-4 w-4" />
                Artists
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start">
                <Library className="mr-2 h-4 w-4" />
                Albums
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default async function UserFeed() {
  const events = await getEvents();
  return (
    <main className="px-4 xl:px-8 2xl:px-24 my-4 dark:text-white">
      <div className="flex flex-row items-center my-4">
        <p className="px-2">Show me</p>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Fairs</SelectItem>
            <SelectItem value="dark">Conferences</SelectItem>
            <SelectItem value="system">All</SelectItem>
          </SelectContent>
        </Select>
        <p className="px-2">from</p>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="World" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">World</SelectItem>
            <SelectItem value="dark">Poland</SelectItem>
            <SelectItem value="system">UK</SelectItem>
          </SelectContent>
        </Select>
        <p className="px-2">sorted by</p>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Magic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Magic</SelectItem>
            <SelectItem value="dark">Attendees</SelectItem>
            <SelectItem value="system">New & Noteworthy</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Sidebar />
      <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
        {events.map((event, idx) => (
          <li key={idx}>
            <FeedTile {...event} />
          </li>
        ))}
      </ul>
    </main>
  );
}
