import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routing from "./Routing";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;


