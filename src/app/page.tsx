import Image from "next/image";
import { FiMapPin, FiUsers } from "react-icons/fi";
import { Inter } from "next/font/google";
import { Event, getEvents } from "@/server/getEvents";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const FeedTile = (props: Event) => {
  return (
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
  );
};

export default async function Feed() {
  const events = await getEvents();
  return (
    <main className="px-4 xl:px-8 2xl:px-24 dark:text-white">
      <h1 className="text-2xl font-bold mt-4">Feed</h1>
      <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 mt-4">
        {events.map((event, idx) => (
          <li key={idx}>
            <FeedTile {...event} />
          </li>
        ))}
      </ul>
    </main>
  );
}
