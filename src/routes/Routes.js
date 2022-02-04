import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../components/index";
import { Home, About, Edit } from "../pages/index";

/* 
Put all of your routes here and they will be imported to App.js
Import all of your components from the index.js file in the root of components folder
*/

const MyRoutes = () => {
  return (
    <Routes>
      {/* This is a public route */}
      <Route path="/About" element={<About />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/Edit" element={<Edit />} />
      {/* This is a protected route */}
      {/* <Route element={<ProtectedRoutes />}>
        <Route path="/Editor" element={<Editor />} />
      </Route> */}
      {/* This is a redirect route */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default MyRoutes;
