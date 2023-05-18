"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Stepper } from "@/components/client/create-gather-steps/common/Stepper";
import { FormField } from "@/components/client/create-gather-steps/common/FormField";
import { getName } from "@/lib/getName";
import { useEffect, useState } from "react";
import ImageUpload from "@/components/client/create-gather-steps/common/ImageHanderThing";

const formSchema = z.object({
  description: z.string(),
  image: z.string(),
});

export const Story = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    console.log({ selectedImage });
  }, [selectedImage]);

  const handleImageUpload = (file: File) => {
    setSelectedImage(file);
  };

  const onSubmit = (formData: z.infer<typeof formSchema>) => {
    console.log({ formData });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { name } = getName(form);

  return (
    <div>
      <Stepper />
      <div className="py-6 bg-gray-50 my-8">
        <h2 className="text-2xl font-bold text-center">
          Introduce your project
        </h2>
        <h3 className="text-lg text-center">
          Tell people why they should be excited about your project. Get
          specific but be clear and be brief.
        </h3>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          className={"gap-5 items-stretch"}
          header="Project image"
          paragraph="Add an image that clearly represents your project. 
          Choose one that looks good at different sizes—it’ll appear on your project page,
           across the Kickstarter website and mobile apps, and (when shared) on social channels.
          
          Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.
          
          Avoid images with banners, badges, or text—they are illegible at smaller sizes, 
          can be penalized by the Facebook algorithm, 
          and decrease your chances of getting Kickstarter homepage and newsletter features.">
          <div className="flex flex-col items-start">
            <Label htmlFor="description" className="pb-2">
              Image: :
            </Label>
            <Input
              {...form.register("image")}
              id={form.register("image").name}
              type="image"
              placeholder="Event Image"
            />
          </div>
        </FormField>
        <FormField
          className={"gap-5 items-stretch"}
          header="Project description"
          paragraph="Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are. Your description should tell backers everything they need to know. If possible, include images to show them what your project is all about and what rewards look like. Read more about telling your story">
          <div className="flex flex-col items-start">
            <Label htmlFor="description" className="pb-2">
              Description:
            </Label>
            <Input
              {...form.register("description")}
              id={name("description")}
              type="text"
              placeholder="Event description"
            />
          </div>
        </FormField>

        <Separator className="my-8" />

        <div>
          <ImageUpload onImageUpload={handleImageUpload} />
          {selectedImage && (
            <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
          )}
        </div>

        <Button type="submit">Next</Button>
      </form>
    </div>
  );
};
