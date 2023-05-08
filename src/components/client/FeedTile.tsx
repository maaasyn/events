import { Event } from "@/server/getEvents";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiUsers } from "react-icons/fi";

export const FeedTile = (props: Event) => {
  return (
    <>
      <div className="flex flex-col w-full md:w-fit p-2 rounded-lg bg-white dark:bg-gray-800">
        <div className="w-full rounded-t-lg overflow-hidden relative">
          <div className="relative">
            <Image
              src={props.image}
              alt={props.title}
              height={400}
              width={600}
            />
            <HeartIcon className="fill-black/25 text-white absolute top-2 right-2 cursor-pointer transition duration-300 hover:text-red-500" />
          </div>
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
