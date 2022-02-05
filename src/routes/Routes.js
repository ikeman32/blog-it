import * as React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Login, SignUp } from "../components/index";
import { Home, About, Edit, Administrator } from "../pages/index";

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
      {/* This is a protected route */}
      <Route 
        path="/Administrator" 
        element={
        <ProtectedRoutes redirectTo="/Login">
          <Administrator />
        </ProtectedRoutes>
        }
      />
      <Route 
        path="/Edit" 
        element={
        <ProtectedRoutes redirectTo="/Login">
          <Edit />
        </ProtectedRoutes>
        }
      />
      {/* This is a redirect route */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

function ProtectedRoutes({ children, redirectTo }) {
  let isAuthenticated = false; // getAuth();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default MyRoutes;
