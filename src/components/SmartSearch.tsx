import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SmartSearch = () => {
  return (
    <div className="flex flex-row items-center my-4 flex-wrap">
      <p className="px-2">Show me</p>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Fairs">Fairs</SelectItem>
          <SelectItem value="Conferences">Conferences</SelectItem>
          <SelectItem value="All">All</SelectItem>
        </SelectContent>
      </Select>
      <p className="px-2">from</p>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="World" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="World">World</SelectItem>
          <SelectItem value="Poland">Poland</SelectItem>
          <SelectItem value="UK">UK</SelectItem>
        </SelectContent>
      </Select>
      <p className="px-2">sorted by</p>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Magic" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Magic">Magic</SelectItem>
          <SelectItem value="Attendees">Attendees</SelectItem>
          <SelectItem value="New & Noteworthy">New & Noteworthy</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
