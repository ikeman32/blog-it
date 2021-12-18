import * as React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Container from "@mui/material/Container";

export default function Editor() {
  const [value, setValue] = React.useState("");

  return (
    <Container>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </Container>
  );
}
