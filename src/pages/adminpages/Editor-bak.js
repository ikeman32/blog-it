import * as React from "react";
import { 
  AppBar,
  CssBaseline,
  Box,
  Container,
  TextField,
  Toolbar,
  IconButton,
  Tooltip,
} from "@mui/material";

import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  Image,
  Link,
  ViewColumn,
  FontDownload,
} from "@mui/icons-material";


export default function Editor() {
  const [textFormat, setTextFormat] = React.useState("");
  const [text, setText] = React.useState("");
  const changeHandler = (e) => {
    // set the format of selected text to bold
    e.preventDefault();
    setText(e.target.value.textFormat);
  };

  var align = "left";

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{ height: "530px" }}>
        {/* TODO: add formating of text */}
        {/* Toolbar */}
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="default">
            <Toolbar variant="dense" sx={{ justifyContent: "space-around" }}>
              {/* Bold Italics and Underline */}
              <Box>
                <Tooltip title="Bold">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setTextFormat("bold")}
                  >
                    <FormatBold fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Italic">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setTextFormat("italic")}
                  >
                    <FormatItalic fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Underline">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setTextFormat("underline")}
                  >
                    <FormatUnderlined fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Box>
              {/* Alignment */}
              <Box sx={{ marginLeft: "1rem" }}>
                
                <Tooltip title="Align Left">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => {
                      align = "left";
                    }}
                  >
                    <FormatAlignLeft
                      fontSize="large"
                      sx={{ textAlign: `${align}` }}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Align Center">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => {
                      align = "center";
                    }}
                  >
                    <FormatAlignCenter
                      fontSize="large"
                      sx={{ textAlign: `${align}` }}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Align Right">
                  
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => {
                      align = "right";
                    }}
                  >
                    <FormatAlignRight
                      fontSize="large"
                      sx={{ textAlign: `${align}` }}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
              {/* Insert */}
              <Box sx={{ marginLeft: "1rem" }}>
                <Tooltip title="Insert Image">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <Image fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Insert Link">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <Link fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Box>
              {/* Colums and Font Size */}
              <Box sx={{ marginLeft: "1rem" }}>
                <Tooltip title="Columns">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <ViewColumn fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Font Size">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <FontDownload fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        {/* Text Field */}
        <Box my={3} sx={{ maxWidth: "100%", height: "90%", marginTop: "1rem" }}>
          <TextField
            value={text}
            onChange={changeHandler}
            multiline
            rows={18}
            sx={{ width: "100%", maxWidth: "100%" }}
          />
        </Box>
      </Container>
    </React.Fragment>
  );
}
