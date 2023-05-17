"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
  location: z.string().min(2),
  tags: z.string().min(2),
  type: z.string().min(2),
  eventDuration: z.object({ from: z.date(), to: z.date().optional() }),
  content: z.string().min(2),
});

export const AddGathering = () => {
  const onSubmit = (formData: z.infer<typeof formSchema>) => {
    console.log({ formData });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventDuration: {
        from: new Date(),
      },
    },
  });

  const lala = form.register("title");

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          {...form.register("title")}
          type="text"
          placeholder="Event title"
        />
      </div>
      <div>
        <Label htmlFor="description">Description:</Label>
        <Textarea
          type="text"
          role="textbox"
          id="description"
          placeholder="Event description"
          {...form.register("description")}
        />
      </div>

      <Separator className="my-4" />

      <div>
        <Label htmlFor="location">Location:</Label>
        <Input
          type="text"
          placeholder="Event location"
          {...form.register("location")}
        />
      </div>
      <Separator className="my-4" />
      <div>
        <Label htmlFor="tags">Tags:</Label>
        <Input
          type="text"
          id="tags"
          placeholder="Event tags"
          {...form.register("tags")}
        />
      </div>

      <div>
        <Label htmlFor="type">Type:</Label>
        <Input
          type="text"
          id="type"
          placeholder="Event type"
          {...form.register("type")}
        />
      </div>
      <Separator className="my-4" />
      <div>
        <Label htmlFor="eventDuration">Event Duration:</Label>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[300px] justify-start text-left font-normal",
                !form.getValues()?.eventDuration?.from &&
                  "text-muted-foreground"
              )}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {form.getValues()?.eventDuration?.from ? (
                form.getValues()?.eventDuration?.to ? (
                  <>
                    {format(form.getValues().eventDuration.from, "LLL dd, y")} -{" "}
                    {format(form.getValues().eventDuration?.to!, "LLL dd, y")}
                  </>
                ) : (
                  format(form.getValues().eventDuration.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Controller
              control={form.control}
              name="eventDuration"
              render={({ field }) => (
                <Calendar
                  onDayBlur={field.onBlur}
                  mode="range"
                  selected={field.value}
                  onSelect={(d) => {
                    console.log({ d });

                    field.onChange(d);
                  }}
                />
              )}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <Label htmlFor="content">Content:</Label>
        <Textarea
          placeholder="Event content"
          id="content"
          {...form.register("content")}
        />
      </div>

      <Button type="submit">Add Gathering</Button>
    </form>
  );
};
