import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../Home";
import About from "./About";
import Login from "./Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="*" element={<h1> 404 NOT FOUND </h1>} />
      </Routes>
    </div>
  );
}

export default App;
