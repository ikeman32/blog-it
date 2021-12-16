import * as React from 'react';
import MyRoutes from "./components/routes/Routes"; //Import routes
import { Header, StickyFooter } from "./components/index";
import "./App.scss";

function App() {
  //Required for Header
  // TODO: Make this dynamic
  const sections = [
    { title: 'Home', url: '/' },
    { title: 'Design', url: '/Editor' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'About', url: 'About' },
  ];
  return (
    <div>
      {/* title and sections required */}
      {/* TODO: Make this dynamic */}
      <Header title="Blog-It" sections={sections}/>
      <div>
        <MyRoutes />
      </div>
      <StickyFooter />
    </div>
  );
}

export default App;
