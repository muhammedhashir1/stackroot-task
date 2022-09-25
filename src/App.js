import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>      
        </Routes>
    </Router>
  );
}

export default App;
