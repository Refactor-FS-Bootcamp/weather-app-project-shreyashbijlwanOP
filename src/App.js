import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./Componnts/Pages/Home/Home";
import Cities from "./Componnts/Pages/Cities/Cities";
function App() {
  return (
    <div className="App">
    {/* Routing is all set */}
    <Router>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/Home" element ={<Home />} />
        <Route path="/Cities" element = {<Cities />}   />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
