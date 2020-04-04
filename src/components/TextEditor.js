import React, { useMemo, useState } from "react";
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import render from '../functions/render';
import switcher from "../functions/switcher";


export default function TextEditor() {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])

  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable
        renderElement={render.renderElement}
        renderLeaf={render.renderLeaf}
        onKeyDown={event => {
          switcher(event, editor);
        }}
      />
    </Slate>
  )
}


