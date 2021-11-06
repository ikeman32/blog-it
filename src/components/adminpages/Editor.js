import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import ImageIcon from "@mui/icons-material/Image";
import LinkIcon from "@mui/icons-material/Link";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import Tooltip from "@mui/material/Tooltip";

export default function Editor() {
  return (
    
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{ height: "530px" }}
      >
          {/* TODO: add formating of text */}
          {/* Toolbar */}
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="default">
            <Toolbar variant="dense" sx={{ justifyContent: "space-around" }}>
              {/* Bold Italics and Underline */}
              <Box>
                <Tooltip title="Bold">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <FormatBoldIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Italic">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <FormatItalicIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Underline">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <FormatUnderlinedIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Box>
              {/* Alignment */}
              <Box sx={{ marginLeft: "1rem" }}>
                <Tooltip title="Align Left">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <FormatAlignLeftIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Align Center">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <FormatAlignCenterIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Align Right">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <FormatAlignRightIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Box>
              {/* Insert */}
              <Box sx={{ marginLeft: "1rem" }}>
                <Tooltip title="Insert Image">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <ImageIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Insert Link">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <LinkIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Box>
              {/* Colums and Font Size */}
              <Box sx={{ marginLeft: "1rem" }}>
                <Tooltip title="Columns">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <ViewColumnIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Font Size">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <FontDownloadIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        {/* Text Field */}
        <Box my={3} sx={{ maxWidth: "100%", height: "90%", marginTop: "1rem" }}>
          <TextField
            multiline
            rows={18}
            sx={{ width: "100%", maxWidth: "100%" }}
          />
        </Box>
      </Container>
    </React.Fragment>
  );
}
