import React from "react";
import { Link } from "react-router-dom";
import Routes from "./components/routes/Routes"; //Import routes
import { Header } from "./components/index";
import "./App.scss";

function App() {
  return (
    <div>
      <Header>
        <nav style={{margin: '0 auto'} }>
          <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
        </nav>
      </Header>
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default App;
