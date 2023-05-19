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
import { Stepper } from "@/components/client/create-gather-steps/common/Stepper";
import { FormField } from "@/components/client/create-gather-steps/common/FormField";
import { getName } from "@/lib/getName";
import Link from "next/link";

const formSchema = z.object({
  title: z.string().min(2),
  summary: z.string().min(2),
  location: z.string().min(2),
  tags: z.string().min(2),
  type: z.string().min(2),
  eventDuration: z.object({ from: z.date(), to: z.date().optional() }),
});

export const Basics = (props: { id: string }) => {
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

  const { name } = getName(form);

  return (
    <div>
      <Stepper />
      <div className="py-6 bg-gray-50 my-8">
        <h2 className="text-2xl font-bold text-center">
          Start with the basics
        </h2>
        <h3 className="text-lg text-center">
          Make it easy for people to learn about your project.
        </h3>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          className={"gap-5 items-stretch"}
          header="Project title"
          paragraph="Write a clear, brief title and subtitle to help people quickly
            understand your project. Both will appear on your project and
            pre-launch pages. Potential backers will also see them if your
            project appears on category pages, search results, or in emails we
            send to our community.">
          <div className="flex flex-col items-start">
            <Label htmlFor={name("title")} className="pb-2">
              Title:
            </Label>
            <Input
              {...form.register("title")}
              id={name("title")}
              type="text"
              placeholder="Event title"
            />
          </div>
          <div className="flex flex-col items-start">
            <Label htmlFor={name("summary")} className="pb-2">
              Summary:
            </Label>
            <Textarea
              rows={5}
              role="textbox"
              id={name("summary")}
              placeholder="Event summary"
              {...form.register("summary")}
            />
          </div>
        </FormField>

        <Separator className="my-8" />

        <FormField
          header="Project location"
          paragraph="Enter the location that best describes where your project is based.">
          <Label htmlFor={name("summary")} className="pb-2">
            Location:
          </Label>
          <Input
            {...form.register("location")}
            id={name("location")}
            type="text"
            placeholder="Event location"
          />
        </FormField>

        <Separator className="my-8" />

        <FormField
          header="Project category"
          paragraph="Choose a primary category and subcategory to help backers find your
        project. Your second subcategory will help us provide more relevant
        guidance for your project. It won’t display on your project page or
        affect how it appears in search results. You can change these
        anytime before and during your campaign."
          className={"gap-5 items-stretch"}>
          <div className="flex flex-col items-start">
            <Label htmlFor="tags" className="pb-2">
              Tags:
            </Label>
            <Input
              {...form.register("tags")}
              id="tags"
              type="text"
              placeholder="Event tags"
            />
          </div>
          <div className="flex flex-col items-start">
            <Label htmlFor={name("type")} className="pb-2">
              Type:
            </Label>
            <Input
              {...form.register("type")}
              id={name("type")}
              type="text"
              placeholder="Event type"
            />
          </div>
        </FormField>

        <Separator className="my-8" />

        <FormField
          header="Event duration"
          paragraph="Set a time limit for your campaign. You won’t be able to change this
      after you launch.">
          <Label htmlFor="eventDuration" className="pb-2">
            Event Duration:
          </Label>

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
                      {format(form.getValues().eventDuration.from, "LLL dd, y")}{" "}
                      -{" "}
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
                name={"eventDuration"}
                render={({ field }) => (
                  <Calendar
                    onDayBlur={field.onBlur}
                    mode="range"
                    selected={field.value}
                    onSelect={(d) => {
                      field.onChange(d);
                    }}
                  />
                )}
              />
            </PopoverContent>
          </Popover>
        </FormField>

        <Separator className="my-8" />

        <Button type="submit">Next</Button>
        <Button asChild variant="secondary">
          <Link href={`/projects/${props.id}/edit/story`}>Go to next step</Link>
        </Button>
      </form>
    </div>
  );
};
