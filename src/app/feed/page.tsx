import { getEvents } from "@/server/getEvents";
import { LayoutGrid, Mic2, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Radio } from "lucide-react";
import { ListMusic } from "lucide-react";
import { Music2 } from "lucide-react";
import { User } from "lucide-react";
import { FeedTile } from "@/components/client/FeedTile";
import { SmartSearch } from "@/components/SmartSearch";
const Sidebar = () => {
  return (
    <div className="sticky top-0 max-h-screen overflow-y-auto">
      <div className={cn("")}>
        <div className="space-y-4 py-4">
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
              Discover
            </h2>
            <div className="space-y-1">
              <Button
                variant="secondary"
                size="sm"
                className="w-full justify-start">
                <PlayCircle className="mr-2 h-4 w-4" />
                Made for You
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start">
                <LayoutGrid className="mr-2 h-4 w-4" />
                Trending
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start">
                <Radio className="mr-2 h-4 w-4" />
                Favorites
              </Button>
            </div>
          </div>
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
              Manage
            </h2>
            <div className="space-y-1">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start">
                <ListMusic className="mr-2 h-4 w-4" />
                History
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start">
                <Music2 className="mr-2 h-4 w-4" />
                Billing
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Account
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start">
                <Mic2 className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default async function UserFeed() {
  const events = await getEvents();
  return (
    <main className="px-4 xl:px-8 2xl:px-24 my-4 dark:text-white flex min-h-fit">
      <Sidebar />
      <div>
        <SmartSearch />
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
