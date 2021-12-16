import * as React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editor() {
  const [value, setValue] = React.useState('');

  return (
    <ReactQuill theme="snow" value={value} onChange={setValue}/>
  );
}