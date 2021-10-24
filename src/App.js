import React from "react";
//import { Link } from "react-router-dom";
//import Routes from "./components/routes/Routes"; //Import routes
import { Header } from "./components/index";
import "./App.scss";

function App() {
  //Required for Header
  const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];
  return (
    <div>
      {/* title and sections required */}
      <Header title="Blog" sections={sections}/>
      <div>
        
      </div>
    </div>
  );
}

export default App;
