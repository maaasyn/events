"use client";

import { cn } from "@/lib/utils";
import { Event } from "@/server/getEvents";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMapPin, FiUsers } from "react-icons/fi";

export const FeedTile = (props: Event) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <>
      <div className="relative">
        <Link
          href={`/${props.id}`}
          className={"h-full w-full block absolute top-0"}
        />
        <div className="flex flex-col w-full md:w-fit p-2 rounded-lg bg-white dark:bg-gray-800">
          <div className="w-full rounded-t-lg overflow-hidden relative">
            <div className="relative">
              <Link href={`/${props.id}`}>
                <Image
                  src={props.image}
                  alt={props.title}
                  height={400}
                  width={600}
                />
              </Link>
              <button
                type="button"
                role="checkbox"
                aria-checked={isLiked}
                className="top-2 right-2 absolute"
                onClick={() => {
                  setIsLiked(!isLiked);
                }}>
                <HeartIcon
                  className={cn(
                    "active:scale-90 fill-black/25 text-white transition duration-300 hover:text-red-500",
                    isLiked && ["fill-red-500", "hover:text-red-600"]
                  )}
                />
              </button>
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
            <Link href={`/complety-different-page`}>{props.title}</Link>
          </h2>
          <p className="text-sm text-gray-600 mt-2 dark:text-gray-400">
            {props.description}
          </p>
          <Link href={`/localization/${props.location}`}>
            <div className="flex items-center mt-2">
              <FiMapPin className="text-gray-600 dark:text-gray-400 mr-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {props.location}
              </p>
            </div>
          </Link>
          <Link className="z-10" href={`/profile/${props.user.id}`}>
            <div className="flex items-center mt-2">
              <div className="relative w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src={props.user.image}
                  alt={props.user.name}
                  height={24}
                  width={24}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <p className="text-sm text-gray-600 ml-2 dark:text-gray-400">
                {props.user.name}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
