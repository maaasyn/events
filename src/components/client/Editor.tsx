"use client";

import { useEditor, EditorContent, FloatingMenu } from "@tiptap/react";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import { cn } from "@/lib/utils";
import { BoldIcon, ItalicIcon, StrikethroughIcon } from "lucide-react";

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <div className={cn("w-full")}>
      <div>
        {editor && (
          <div>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={cn(editor.isActive("bold") && "bg-gray-400")}>
              <BoldIcon />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={cn(editor.isActive("italic") && "bg-gray-400")}>
              <ItalicIcon />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={cn(editor.isActive("strike") && "bg-gray-400")}>
              <StrikethroughIcon />
            </button>
          </div>
        )}
        <EditorContent
          className={
            "w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }
          editor={editor}
        />
        <button
          onClick={() =>
            console.log({
              html: editor?.getHTML(),
              text: editor?.getText(),
              json: editor?.getText(),
            })
          }>
          Log
        </button>
      </div>
    </div>
  );
};
