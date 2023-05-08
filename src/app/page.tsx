import Image from "next/image";
import { getEvents } from "@/server/getEvents";
import { faker } from "@faker-js/faker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { FeedTile } from "@/components/client/FeedTile";

export default async function LandingFeed() {
  const events = await getEvents();
  const imageSrc = faker.image.abstract(600, 400);
  return (
    <main className="px-4 xl:px-8 2xl:px-24 my-4 dark:text-white">
      <div className="flex flex-col md:flex-row items-center justify-center w-full bg-white dark:bg-gray-800">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-7xl font-bold mt-4 center">
            Discover Upcoming Conferences and Fairs
          </h1>
          <p className="text-lg mt-2">
            Tickets, Events, People and Business in one place
          </p>
        </div>
        <Image
          className="rounded-lg"
          src={imageSrc}
          alt="Landing Image"
          width={600}
          height={400}
        />
      </div>
      <Separator className="my-6" />
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
