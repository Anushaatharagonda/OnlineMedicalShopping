import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import About from './About';
import Login from "./login";
import Home from "./home";
import Medicine from "./Medicine.js"
import Service from "./Service"
import Contact from "./Contact"
import Layout from "./Layout.jsx";
import './Styles/home.css';
import Signup from "./Signup.jsx";
  


const App = () => {
  return (
    <>
      <Router>
        <Layout>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

          
        </Layout>
      </Router>
    </>
  );
};

export default App;
