import React, {
  InputHTMLAttributes,
  useState,
  forwardRef,
  Ref,
  useRef,
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
      }
    };

    const handleFileInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        const file = files[0];
        onImageUpload(file);
      }
    };

    return (
      <label className="hover:cursor-pointer">
        <div
          className={`border-2 border-gray-300 border-dashed rounded-md p-4 text-center ${
            dragging ? "bg-gray-100" : ""
          }`}
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
          Drag and drop an image here, or click to select a file
        </div>
      </label>
    );
  }
);

ImageUpload.displayName = "ImageUpload";

export default ImageUpload;
