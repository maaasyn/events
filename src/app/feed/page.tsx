import { getEvents } from "@/server/getEvents";
import {
  ClockIcon,
  CreditCardIcon,
  GlobeIcon,
  Heart,
  HomeIcon,
  Settings,
  User,
} from "lucide-react";
import { FeedTile } from "@/components/client/FeedTile";
import { SmartSearch } from "@/components/SmartSearch";

const Sidebar = () => {
  return (
    <div className="fixed bottom-0 left-0 z-20 w-full bg-white xs:sticky xs:top-0 xs:max-h-screen xs:w-auto xs:bg-transparent border-t xs:border-none border-slate-400">
      <div className="xs:max-h-screen overflow-y-scroll px-2 md:px-0">
        <div className="flex flex-col xs:items-center md:items-baseline px-4 xs:px-0 xs:py-2 border-b border-gray-200 xs:border-0">
          <h2 className="hidden xs:block mb-2 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="flex flex-row xs:flex-col space-y-1">
            <button className="flex flex-col items-center justify-center w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded-md md:flex-row md:items-center md:justify-start">
              <HomeIcon className="w-5 h-5 xs:w-8 xs:h-8 md:mr-2 md:w-4 md:h-4" />
              Home
            </button>
            <button className="flex flex-col items-center justify-center w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded-md md:flex-row md:items-center md:justify-start">
              <GlobeIcon className="w-5 h-5 xs:w-8 xs:h-8 md:mr-2 md:w-4 md:h-4" />
              Explore
            </button>
            <button className="flex flex-col items-center justify-center w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded-md md:flex-row md:items-center md:justify-start">
              <Heart className="w-5 h-5 xs:w-8 xs:h-8 md:mr-2 md:w-4 md:h-4" />
              Loved
            </button>
          </div>
        </div>
        <div className="items-center hidden xs:flex flex-col xs:items-center md:items-baseline px-4 xs:px-0 border-b border-gray-200 xs:border-0">
          <h2 className="hidden xs:block mb-2 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <button className="flex flex-col items-center justify-center w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded-md md:flex-row md:items-center md:justify-start">
              <ClockIcon className="w-8 h-8 md:mr-2 md:w-4 md:h-4" />
              History
            </button>

            <button className="flex flex-col items-center justify-center w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded-md md:flex-row md:items-center md:justify-start">
              <CreditCardIcon className="w-8 h-8 md:mr-2 md:w-4 md:h-4" />
              Payment
            </button>

            <button className="flex flex-col items-center justify-center w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded-md md:flex-row md:items-center md:justify-start">
              <User className="w-8 h-8 md:mr-2 md:w-4 md:h-4" />
              Profile
            </button>

            <button className="flex flex-col items-center justify-center w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded-md md:flex-row md:items-center md:justify-start">
              <Settings className="w-8 h-8 md:mr-2 md:w-4 md:h-4" />
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default async function UserFeed() {
  const events = await getEvents();
  return (
    <main className="md:px-4 xl:px-8 2xl:px-24 my-4 dark:text-white flex mb-16 xs:mb-0">
      <Sidebar />
      <div>
        <SmartSearch isLowMarginBottom={false} />
        <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
          {events.map((event, idx) => (
            <li key={idx}>
              <FeedTile {...event} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
