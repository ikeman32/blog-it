import * as React from "react";
import MyRoutes from "./routes/Routes"; //Import routes
import {
  Header,
  StickyFooter,
  sections,
  title,
  defaultTheme,
} from "./components/index";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

function App() {
  //Required for Header

  return (
    <Box
      sx={{
        display: defaultTheme.body.display,
        flexDirection: defaultTheme.body.direction,
        backgroundColor: defaultTheme.body.background,
      }}
    >
      {/* title and sections required */}
      <Header title={title} sections={sections} />
      <Box
        sx={{
          display: defaultTheme.body.display,
        }}
      >
        <Box
          name="Left"
          sx={{
            display: defaultTheme.body.screenLeft.display,
            justifyContent: defaultTheme.body.screenLeft.justifyContent,
            width: defaultTheme.body.screenLeft.width,
          }}
        >
          Left
        </Box>
        <Box
          name="center"
          sx={{
            width: defaultTheme.body.screenCenter.width,
          }}
        >
          <MyRoutes />
        </Box>
        <Box
          name="Right"
          sx={{
            display: defaultTheme.body.screenRight.display,
            justifyContent: defaultTheme.body.screenRight.justifyContent,
            width: defaultTheme.body.screenRight.width,
          }}
        >
          Right
        </Box>
      </Box>
      <StickyFooter />
    </Box>
  );
}

export default App;
