import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"

import EditorToolbar from "./toolbar/editor-toolbar"

interface EditorProps {
  content: string
  placeholder?: string
  onChange: (value: string) => void
}

const Editor = ({ content, placeholder, onChange }: EditorProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
  })

  if (!editor) return null

  return (
    <div className={cn(
      "prose max-w-none w-full bg-background dark:prose-invert border",
      "transition-all duration-200",
    )}>
      <EditorToolbar editor={editor} />
      <div className="editor">
        <EditorContent editor={editor} placeholder={placeholder} className="px-4"/>
      </div>
    </div>
  )
}

export default Editor