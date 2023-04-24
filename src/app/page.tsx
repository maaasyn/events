import Image from "next/image";
import { faker } from "@faker-js/faker";
import { FiMapPin, FiUsers } from "react-icons/fi";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Event = {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  attendees: number;
  user: {
    id: string;
    name: string;
    image: string;
  };
};

const FeedTile = (props: Event) => {
  return (
    <div className="flex flex-col w-full md:w-fit p-2 rounded-lg bg-white">
      <div className="w-full rounded-t-lg overflow-hidden">
        <Image
          src={props.image}
          alt={props.title}
          height={400}
          width={600}
          layout="responsive"
        />
      </div>
      <div className="flex flex-row justify-between items-center mt-4">
        <p className="text-sm text-gray-600">
          {new Date(props.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <div className="flex items-center gap-2">
          <FiUsers className="text-gray-600" />
          <p className="text-sm text-gray-600">{props.attendees}</p>
        </div>
      </div>
      <h2 className="text-lg font-bold mt-4">{props.title}</h2>
      <p className="text-sm text-gray-600 mt-2">{props.description}</p>
      <div className="flex items-center mt-2">
        <FiMapPin className="text-gray-600 mr-2" />
        <p className="text-sm text-gray-600">{props.location}</p>
      </div>
      <div className="flex items-center mt-2">
        <div className="relative w-6 h-6 rounded-full overflow-hidden">
          <Image
            src={props.user.image}
            alt={props.user.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="text-sm text-gray-600 ml-2">{props.user.name}</p>
      </div>
    </div>
  );
};

export default async function Feed() {
  const events = await getMockedEvents();
  return (
    <main className="px-4 xl:px-8 2xl:px-24">
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

const generateRandomEvent = (props?: { override: Event }): Event => {
  const result: Event = {
    id: props?.override?.id ?? faker.datatype.uuid(),
    title: props?.override?.title ?? faker.lorem.words(3),
    description: props?.override?.description ?? faker.lorem.words(10),
    image: props?.override?.image ?? faker.image.imageUrl(400, 300),
    date: props?.override?.date ?? faker.date.future().toISOString(),
    location: props?.override?.location ?? faker.address.city(),
    attendees: props?.override?.attendees ?? faker.datatype.number(100),
    user: {
      id: props?.override?.user?.id ?? faker.datatype.uuid(),
      name: props?.override?.user?.name ?? faker.name.fullName(),
      image: props?.override?.user?.image ?? faker.image.imageUrl(20, 20),
    },
  };
  return result;
};

const getMockedEvents = async () => {
  const events = Array.from({ length: 20 }, () => generateRandomEvent());
  return events;
};
