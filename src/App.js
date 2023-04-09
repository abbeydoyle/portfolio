import React from "react";
import "./app.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Publications from "./pages/Publications.js";
import Resume from "./pages/Resume.js";
import Portfolio from "./pages/Portfolio.js";
import Career from "./pages/Career.js";
import Volunteer from "./pages/Volunteer.js";
import Header from "./components/Header.js";
import FooterApp from "./components/Footer.js";
import Education from "./pages/Education";


function App() {
      return (
          <Router>
                <Header />
                <div className="container flex flex-col justify-center items-center md:ml-[5rem]">
                  <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/volunteer" element={<Volunteer />} />
                    <Route path="/education" element={<Education />} />
                  </Routes>
                </div>
                <FooterApp />
          </Router>
      );
    }
    
    export default App;