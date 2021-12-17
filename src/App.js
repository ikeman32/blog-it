import * as React from "react";
import MyRoutes from "./routes/Routes"; //Import routes
import { Header, StickyFooter, sections, title } from "./components/index";
import Box from '@mui/material/Box';

import "./App.scss";

function App() {
  //Required for Header
  
  return (
    <Box className='app' >
      
      {/* title and sections required */}      
      <Header title={title} sections={sections}/>
      <Box className='app-content'>
        <MyRoutes />
      </Box>
      <StickyFooter />
    </Box>
  );
}

export default App;
