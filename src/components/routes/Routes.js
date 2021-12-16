import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, About, Login, SignUp, Editor } from "../index";

/* 
Put all of your routes here and they will be imported to App.js
Import all of your components from the index.js file in the root of components folder
*/

const MyRoutes = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Editor" element={<Editor />} />
      </Routes>
  );
};

export default MyRoutes;
