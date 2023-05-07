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

export default async function Feed() {
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
        <div className="rounded-lg">
          <Image src={imageSrc} alt="Landing Image" width={600} height={400} />
        </div>
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

const FeedTile = (props: Event) => {
  return (
    <>
      <div className="flex flex-col w-full md:w-fit p-2 rounded-lg bg-white dark:bg-gray-800">
        <div className="w-full rounded-t-lg overflow-hidden">
          <Image src={props.image} alt={props.title} height={400} width={600} />
        </div>
        <div className="flex flex-row justify-between items-center mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {new Date(props.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <div className="flex items-center gap-2">
            <FiUsers className="text-gray-600 dark:text-gray-400" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {props.attendees}
            </p>
          </div>
        </div>
        <h2 className="text-xl font-bold mt-2 text-gray-800 dark:text-white">
          <Link href={`/${props.id}`}>{props.title}</Link>
        </h2>
        <p className="text-sm text-gray-600 mt-2 dark:text-gray-400">
          {props.description}
        </p>
        <div className="flex items-center mt-2">
          <FiMapPin className="text-gray-600 dark:text-gray-400 mr-2" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {props.location}
          </p>
        </div>
        <div className="flex items-center mt-2">
          <div className="relative w-6 h-6 rounded-full overflow-hidden">
            <Image
              src={props.user.image}
              alt={props.user.name}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <p className="text-sm text-gray-600 ml-2 dark:text-gray-400">
            {props.user.name}
          </p>
        </div>
      </div>
    </>
  );
};
