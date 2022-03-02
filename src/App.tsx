import { Button } from "@mui/material";
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import HomePage from "./components/home-page/HomePage";
import SimpleBackdrop from "./components/login-signup/backdrop";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Hello />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

function Hello() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
