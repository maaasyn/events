import { faker } from "@faker-js/faker";

export type Event = {
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

const generateRandomEvent = (props?: { override: Event }): Event => {
  const result: Event = {
    id: props?.override?.id ?? faker.string.uuid(),
    title: props?.override?.title ?? faker.lorem.words(3),
    description: props?.override?.description ?? faker.lorem.words(10),
    image:
      props?.override?.image ??
      faker.image.urlLoremFlickr({
        category: "abstract",
        width: 400,
        height: 300,
      }),
    date: props?.override?.date ?? faker.date.future().toISOString(),
    location: props?.override?.location ?? faker.location.city(),
    attendees: props?.override?.attendees ?? faker.number.int(100),
    user: {
      id: props?.override?.user?.id ?? faker.string.uuid(),
      name: props?.override?.user?.name ?? faker.person.fullName(),
      image:
        props?.override?.user?.image ??
        faker.image.urlLoremFlickr({
          category: "abstract",
          width: 20,
          height: 20,
        }),
    },
  };
  return result;
};

export const getEvents = async () => {
  const events = Array.from({ length: 24 }, () => generateRandomEvent());
  // TODO: Mocked events. Replace with real data.
  return events;
};
