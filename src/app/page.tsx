import Image from "next/image";
import { getEvents } from "@/server/getEvents";
import { faker } from "@faker-js/faker";
import { Separator } from "@/components/ui/separator";
import { FeedTile } from "@/components/client/FeedTile";
import { SmartSearch } from "@/components/SmartSearch";
import { Button } from "@/components/ui/button";

export default async function LandingFeed() {
  const events = await getEvents();
  const imageSrc = faker.image.urlLoremFlickr({
    category: "abstract",
    height: 400,
    width: 600,
  });
  return (
    <main className="px-4 xl:px-8 2xl:px-24 my-4 dark:text-white">
      <div className="grid grid-cols-[repeat(1,_minmax(0,_auto))] grid-rows-[repeat(3,_minmax(0,_auto))] md:grid-cols-[repeat(2,_minmax(0,_auto))] md:grid-rows-[repeat(2,_minmax(0,_auto))] items-center justify-center w-full bg-white dark:bg-gray-800">
        <div className="max-w-xl col-start-1 row-start-1">
          <h1 className="text-4xl lg:text-7xl font-bold mt-4 center">
            Discover Upcoming Conferences and Fairs
          </h1>
          <p className="text-lg mt-2">
            Tickets, Events, People and Business in one place
          </p>
        </div>
        <div className="flex col-start-1 row-start-3 lg:row-start-2">
          <Button className="mt-4">Create Event</Button>
          <Button variant={"outline"} className="mt-4 ml-4">
            Learn more
          </Button>
        </div>
        <div className="col-start-1 row-start-2 lg:col-start-2 lg:row-span-full">
          <Image
            className="rounded-lg"
            src={imageSrc}
            alt="Landing Image"
            width={600}
            height={400}
          />
        </div>
      </div>
      <Separator className="my-6" />
      <SmartSearch isLowMarginBottom={true} />
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
