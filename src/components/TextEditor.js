import React, { useMemo, useState } from "react";
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import {FiBold, FiItalic, FiUnderline, FiCode} from 'react-icons/fi';
import render from '../functions/render';
import switcher from "../functions/switcher";

import './style.css';
import CustomEditor from "./CustomEditor";

export default function TextEditor() {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])

  return (
    <div className="container">
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <div className="menuBar">
          <button className="button" onMouseDown={()=>{
            CustomEditor.toggleBoldMark(editor);
          }}>
            <FiBold/>
          </button>
          <button className="button" onMouseDown={()=>{
            CustomEditor.toggleItalicMark(editor);
          }}>
            <FiItalic/>
          </button>
          <button className="button" onMouseDown={()=>{
            CustomEditor.toggleUnderlineMark(editor);
          }}>
            <FiUnderline/>
          </button>
          <button className="button" onMouseDown={()=>{
            CustomEditor.toggleCodeBlock(editor);
          }}>
            <FiCode/>
          </button>
        </div>
        <Editable
          autoFocus
          renderElement={render.renderElement}
          renderLeaf={render.renderLeaf}
          onKeyDown={event => {
            switcher(event, editor);
          }}
        />
      </Slate>
    </div>
    
  )
}


