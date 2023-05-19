import { cn } from "@/lib/utils";

export const FormField = ({
  children,
  header,
  paragraph,
  className,
}: React.PropsWithChildren & {
  header: string;
  paragraph: string;
  className?: string;
}) => {
  return (
    <div className="m-4 flex flex-row justify-between">
      <div className="text-left w-1/3">
        <h3 className="text-bold">{header}</h3>
        <p className="text-sm">{paragraph}</p>
      </div>
      <div className="w-1/2 flex flex-col gap-10">
        <div className={cn("flex flex-col items-start", className)}>
          {children}
        </div>
      </div>
    </div>
  );
};
