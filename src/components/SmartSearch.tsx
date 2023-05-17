import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Settings2Icon } from "lucide-react";

const SearchBody = () => {
  return (
    <div className="flex md:flex-row flex-col items-end my-4 flex-wrap gap-y-1 w-fit m-auto">
      <div className="flex items-center">
        <p className="px-2">Show me</p>
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Fairs">Fairs</SelectItem>
            <SelectItem value="Conferences">Conferences</SelectItem>
            <SelectItem value="All">All</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center">
        <p className="px-2">from</p>
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="World" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="World">World</SelectItem>
            <SelectItem value="Poland">Poland</SelectItem>
            <SelectItem value="UK">UK</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center">
        <p className="px-2">sorted by</p>
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Magic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Magic">Magic</SelectItem>
            <SelectItem value="Attendees">Attendees</SelectItem>
            <SelectItem value="New & Noteworthy">New & Noteworthy</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export const SmartSearch = (props: { isLowMarginBottom: boolean }) => {
  return (
    <div>
      <div className="hidden xs:block">
        <SearchBody />
      </div>
      <div className="xs:hidden block">
        <Popover>
          <PopoverTrigger
            asChild
            className={cn(
              "fixed left-1/2 transform -translate-x-1/2 z-20",
              props.isLowMarginBottom ? "bottom-4" : "bottom-20"
            )}>
            <Button variant="default" className="rounded-full p-2 h-8">
              <Settings2Icon className="mr-2 h-4 w-4" />
              Filter
              <span className="sr-only">Open popover</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <SearchBody />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
