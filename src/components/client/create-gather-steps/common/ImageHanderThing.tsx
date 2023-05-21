import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TrashIcon, UploadCloudIcon } from "lucide-react";
import React, {
  InputHTMLAttributes,
  useState,
  forwardRef,
  Ref,
  useRef,
  useEffect,
} from "react";

type ImageUploadProps = {
  onImageUpload: (file: File) => void;
};

const ImageUpload = forwardRef(
  (
    {
      onImageUpload,
      ...rest
    }: ImageUploadProps & InputHTMLAttributes<HTMLInputElement>,
    ref: Ref<HTMLInputElement>
  ) => {
    const [dragging, setDragging] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setDragging(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setDragging(false);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setDragging(false);

      const files = event.dataTransfer.files;
      if (files.length > 0) {
        const file = files[0];
        onImageUpload(file);
        setSelectedImage(file);
      }
    };

    const handleFileInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        const file = files[0];
        onImageUpload(file);
        setSelectedImage(file);
      }
    };

    useEffect(() => {
      console.log({ selectedImage });
    }, [selectedImage]);

    return (
      <>
        <div
          className={cn(
            "border-2 border-gray-300 border-dashed rounded-md p-4 w-full h-full",
            !selectedImage && "hover:cursor-pointer"
          )}>
          {selectedImage ? (
            <div className="w-full h-full">
              <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
              <Button onClick={() => setSelectedImage(null)}>
                <TrashIcon />
              </Button>
            </div>
          ) : (
            <label>
              <div
                className={cn(
                  "text-center flex justify-center items-center flex-col w-full h-full",
                  dragging && "bg-gray-100"
                )}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}>
                <input
                  {...rest}
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                  style={{ display: "none" }}
                  ref={ref}
                />

                {!selectedImage && (
                  <>
                    <UploadCloudIcon className="h-20 w-20" />
                    <div>
                      Drag and drop an image here, or click to select a file
                    </div>
                  </>
                )}
              </div>
            </label>
          )}
        </div>
      </>
    );
  }
);

ImageUpload.displayName = "ImageUpload";

export default ImageUpload;
