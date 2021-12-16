import * as React from "react";
import MyRoutes from "./components/routes/Routes"; //Import routes
import { Header, StickyFooter, sections, title } from "./components/index";
import "./App.scss";

function App() {
  //Required for Header
  
  return (
    <div className='app' >
      
      {/* title and sections required */}      
      <Header title={title} sections={sections}/>
      <div className='app-content'>
        <MyRoutes />
      </div>
      <StickyFooter />
    </div>
  );
}

export default App;
