import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Home from "./routes/Home";
import About from "./routes/About";
import Skills from "./routes/Skills";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
