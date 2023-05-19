export const Stepper = () => {
  return (
    <ol className="flex flex-row justify-around my-10">
      <li className="flex flex-col items-center flex-grow relative">
        <div className="w-8 h-8 z-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
          1
        </div>
        <p className="text-sm pt-2">Basics</p>
        <div className="absolute h-0.5 bg-black w-1/2 right-0 top-4 transform -translate-y-1/2"></div>
      </li>
      <li className="flex flex-col items-center flex-grow relative">
        <div className="w-8 h-8 z-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
          2
        </div>
        <p className="text-sm pt-2">Story</p>
        <div className="absolute h-0.5 bg-black w-full left-0 right-0 top-4 transform -translate-y-1/2"></div>
      </li>
      <li className="flex flex-col items-center flex-grow relative">
        <div className="w-8 h-8 z-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
          3
        </div>
        <p className="text-sm pt-2">Billing</p>
        <div className="absolute h-0.5 bg-black w-full left-0 right-0 top-4 transform -translate-y-1/2"></div>
      </li>
      <li className="flex flex-col items-center flex-grow relative">
        <div className="w-8 h-8 z-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
          4
        </div>
        <p className="text-sm pt-2">Final touches</p>
        <div className="absolute h-0.5 bg-black w-1/2 left-0 top-4 transform -translate-y-1/2"></div>
      </li>
    </ol>
  );
};
