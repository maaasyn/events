"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Stepper } from "@/components/client/create-gather-steps/common/Stepper";
import { useState } from "react";
import ImageUpload from "@/components/client/create-gather-steps/common/ImageHanderThing";
import Link from "next/link";
import { Editor } from "@/components/client/Editor";

const formSchema = z.object({
  description: z.string(),
  image: z.string(),
});

export const Story = (props: { id: string }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = (file: File) => {
    setSelectedImage(file);
  };

  const onSubmit = (formData: z.infer<typeof formSchema>) => {
    console.log({ formData });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div>
      <Stepper activeStep={2} />

      <div className="py-6 bg-gray-50 my-8 px-10">
        <h2 className="text-2xl font-bold text-center">
          Introduce your project
        </h2>
        <h3 className="text-lg text-center">
          Tell people why they should be excited about your project. Get
          specific but be clear and be brief.
        </h3>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="m-4 flex gap-4 flex-col">
          <h3 className="text-bold">Project image</h3>
          <p className="text-sm">
            Add an image that clearly represents your project. Choose one that
            looks good at different sizes—it’ll appear on your project page,
            across the Kickstarter website and mobile apps, and (when shared) on
            social channels. Your image should be at least 1024x576 pixels. It
            will be cropped to a 16:9 ratio. Avoid images with banners, badges,
            or text—they are illegible at smaller sizes, can be penalized by the
            Facebook algorithm, and decrease your chances of getting Kickstarter
            homepage and newsletter features
          </p>
          <div className="w-full aspect-video">
            <ImageUpload
              id={form.register("image").name}
              {...form.register("image")}
              onImageUpload={handleImageUpload}
            />
          </div>
        </div>

        <Separator className="my-8" />

        <div className="m-4 flex gap-4 flex-col">
          <h3 className="text-bold">Project description</h3>
          <p className="text-sm">
            Describe what you&apos;re raising funds to do, why you care about
            it, how you plan to make it happen, and who you are. Your
            description should tell backers everything they need to know. If
            possible, include images to show them what your project is all about
            and what rewards look like. Read more about telling your story
          </p>
          <div className="w-full min-h-[10rem]">
            <Editor />
          </div>
        </div>

        <Separator className="my-8" />

        <Button type="submit">Next</Button>
        <Button asChild type="button" variant="secondary">
          <Link href={`/projects/${props.id}/edit/basics`}>Back to basics</Link>
        </Button>
      </form>
    </div>
  );
};
