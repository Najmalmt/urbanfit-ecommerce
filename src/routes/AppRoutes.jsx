// import { Routes, Route } from "react-router-dom";

// import Home from "../pages/Home";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//     </Routes>
//   );
// };

// export default AppRoutes;










// import { Routes, Route } from "react-router-dom";

// import Home from "../pages/Home";

// import Login from "../pages/Login";

// import Signup from "../pages/Signup";

// export default function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />

//       <Route path="/login" element={<Login />} />

//       <Route path="/signup" element={<Signup />} />
//     </Routes>
//   );
// }
import React from "react";

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "../pages/Home";

import Login from "../pages/Login";

import Signup from "../pages/Signup";

const AppRoutes = () => {

  const token =
    localStorage.getItem("token");

  return (
    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={
          token ? (
            <Home />
          ) : (
            <Navigate to="/signup" />
          )
        }
      />

      {/* SIGNUP */}
      <Route
        path="/signup"
        element={
          token ? (
            <Navigate to="/" />
          ) : (
            <Signup />
          )
        }
      />

      {/* LOGIN */}
      <Route
        path="/login"
        element={
          token ? (
            <Navigate to="/" />
          ) : (
            <Login />
          )
        }
      />

    </Routes>
  );
};

export default AppRoutes;