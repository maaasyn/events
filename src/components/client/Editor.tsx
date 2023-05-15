"use client";

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}>
            bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}>
            italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}>
            strike
          </button>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
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
    </>
  );
};
