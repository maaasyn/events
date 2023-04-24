import { getEvents } from "@/server/getEvents";
import Image from "next/image";
import { FiMapPin, FiUsers } from "react-icons/fi";
import markdownParser from "@wcj/markdown-to-html";

export default async function SpecificGathering(props: {
  params: {
    id: string;
  };
}) {
  const {
    title,
    image,
    date,
    location,
    attendees,
    user,
    description,
    content,
  } = await getEvent(props.params.id);

  return (
    <div className="flex flex-col items-center w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
      <div className="w-full md:w-2/3">
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

      <div className="flex flex-col justify-between p-4 w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white my-2">
          {title}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="flex items-center my-2">
          <FiUsers className="text-gray-600 dark:text-gray-400 mr-2" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {attendees} Attendees
          </p>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {description}
        </p>

        <div className="flex items-center my-2">
          <FiMapPin className="text-gray-600 dark:text-gray-400 mr-2" />
          <p className="text-sm text-gray-600 dark:text-gray-400">{location}</p>
        </div>

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

      <div className="flex flex-row w-full bg-gray-100 dark:bg-gray-900 p-4">
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
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const getEvent = async (id: string) => {
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

*Cessante tenuavit* reddidit carpe adpellavere haut interea, somno seque, quid.
Ama trepidamque vocis referebam interrita in orbem deformes modicisque fugientem
et. Loton a crinem meoque, ut risisse proxima; leve somnos. Spem mollibus videre
accedere Cerbereos [locum](http://www.mea.org/), manifestaque, Stygio.

Acta excussit quondam **fragor**. Dextera in sitae solebat, est fuerat, ignotis
olim: inhaeserat excepto Phrygiaeque casus circumlitus nubemque aderat!`;
  const [event] = await getEvents();
  const content = markdownParser(markdown);

  return { ...event, content: content };
};
