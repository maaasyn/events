import { Editor } from "@/components/client/Editor";

export default function CreateGather() {
  return (
    <div className="flex flex-col items-center justify-center min-h-fit py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Create a Gather</h1>
        <div className="min-w-full mt-12">
          <Editor />
        </div>
      </main>
    </div>
  );
}