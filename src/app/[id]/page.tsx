import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";
import { getEvents } from "@/server/getEvents";
import { FiCalendar, FiMapPin, FiUsers } from "react-icons/fi";

const EventCard = (props: Awaited<ReturnType<typeof getEvent>>) => {
  const { title, image, date, location, attendees, user, description } = props;

  return (
    <div className="w-full md:px-4 grid grid-cols-1 grid-rows-[repeat(3,_minmax(0,_auto))] md:grid-rows-[repeat(2,_minmax(0,_auto))] md:gap-4 md:max-w-screen-lg auto-rows-min auto-cols-min md:my-4 my-2 ">
      {/* Title */}
      <div className="col-start-1 row-start-1 md:grid-cols-2 col-span-1 md:col-span-2 flex md:justify-start">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white my-2 ml-4 md:ml-0">
          {title}
        </h1>
      </div>

      {/* Image */}
      <div className="col-start-1 row-start-2">
        <Image
          src={image}
          alt={title}
          height={400}
          width={600}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      {/* Details */}
      <div className="col-start-1 row-start-3 md:col-start-2 md:row-start-2 flex flex-col justify-center p-4 md:max-w-screen-xxs md:w-60">
        {/* Date */}
        <div className="flex items-center my-2">
          <FiCalendar className="text-gray-600 dark:text-gray-400 mr-2" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {new Date(date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Attendees */}
        <div className="flex items-center my-2">
          <FiUsers className="text-gray-600 dark:text-gray-400 mr-2" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {attendees} Attendees
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {description}
        </p>

        {/* Location */}
        <div className="flex items-center my-2">
          <FiMapPin className="text-gray-600 dark:text-gray-400 mr-2" />
          <p className="text-sm text-gray-600 dark:text-gray-400">{location}</p>
        </div>

        {/* User */}
        <div className="flex items-center my-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={user.image}
              alt={user.name}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 ml-2">
            {user.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default async function SpecificGathering(props: {
  params: {
    id: string;
  };
}) {
  const event = await getEvent(props.params.id);

  return (
    <main className="flex flex-col items-center w-full bg-white dark:bg-gray-800 rounded-lg">
      <EventCard {...event} />
      <div className="flex flex-row w-full xs:justify-evenly bg-gray-100 dark:bg-gray-900 p-4 overflow-x-auto">
        <h2 className="text-m text-gray-800 dark:text-white mr-4">Comments</h2>
        <h2 className="text-m text-gray-800 dark:text-white mr-4">FAQ</h2>
        <h2 className="text-m text-gray-800 dark:text-white mr-4">Updates</h2>
        <h2 className="text-m text-gray-800 dark:text-white mr-4">
          Prelegents
        </h2>
        <h2 className="text-m text-gray-800 dark:text-white">Community</h2>
      </div>
      <div className="p-4 md:w-2/3">
        <div className="bg-white dark:bg-gray-800">
          <div className="prose dark:prose-invert max-w-none">
            {/* @ts-expect-error Async Server Component Workaround */}
            <MDXRemote source={event.markdown} />
          </div>
        </div>
      </div>
    </main>
  );
}

const getEvent = async (_id: string) => {
  const markdown = `# Ingens et tecta optaris munusque carituraque quodcumque

## Transitque oculis cubitoque quid tristique velantque creat

Lorem markdownum putes. Tibi illic sed intulit fores, Circes est bellum, cum
vatis cui: servat. Corpus et advertitur Dorylas.

> Et loquor est Latina et septem Theridamas citaeque *victori nuribusque*.
> Arcton Cumaea, domo tauro et domum laedunt has in feroque. Procumbit Crathis
> poscimus magnanimus recenti tibi fronte: da viribus eluvie ruere! Virgo non
> dignoque restatque Hersilien saevit coeperunt, quae per, una Phlegraeis
> liquidas. Opem oscula facta placet altae iterum; redeuntia ipsa sortitus voces
> sit gentisque putat probat et deducit morae.

Deoida tactas molitur di namque habes; femina luna: reppulit **miscet**. Quod
Phlegethontide esset; alta perpetuo relecto vitae. Illa patriam Et incipit
corpus, tendere qua silet alas licet ille: apta a Tyros quantum tabe. Auro
**effugies gradu** nec ille lacertos daret.

## Supplex circumdare

Famulosque orant, capit, solvere sic Delius Hebrum, est domo nec oscula,
sanguine **quaeris volvuntur** sequentur Cadmi. Quid sublimia. Res patrioque
futuri supra superosque! Tu sublimes pugnare nullaque nemus hastilia risi esse;
tigres!

- Plurimus spargit mente Ceres
- Ignoscas a ictus ipsaque nutritur puellae nimium
- In quis ferentem dictis cernimus Iapygiam
- Inclusas trepidas ut quercus

![kotki](https://www.dolina-noteci.pl/data/include/img/news/1648545312.jpg)

*Cessante tenuavit* reddidit carpe adpellavere haut interea, somno seque, quid.
Ama trepidamque vocis referebam interrita in orbem deformes modicisque fugientem
et. Loton a crinem meoque, ut risisse proxima; leve somnos. Spem mollibus videre
accedere Cerbereos [locum](http://www.mea.org/), manifestaque, Stygio.

Acta excussit quondam **fragor**. Dextera in sitae solebat, est fuerat, ignotis
olim: inhaeserat excepto Phrygiaeque casus circumlitus nubemque aderat!`;
  const [event] = await getEvents();

  return { ...event, markdown };
};

export async function generateMetadata(): Promise<Metadata> {
  const [event] = await getEvents();
  return { title: event.title, description: event.description };
}
