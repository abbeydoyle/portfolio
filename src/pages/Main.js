import React, { useState } from "react";
import Education from "./Education";
import About from "./About";
import Publications from "./Publications";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Career from "./Career";
import Volunteer from "./Volunteer";
import Contact from "./Contact";
import Header from "../components/Header";
import FooterApp from "../components/Footer";

export default function Main() {
      const [currentPage, setCurrentPage] = useState("About");

      const renderPage = () => {
        if (currentPage === "About") {
          return <About />;
        }
        if (currentPage === "Education") {
          return <Education />;
        }
        if (currentPage === "Publications") {
          return <Publications />;
        }
        if (currentPage === "Resume") {
          return <Resume />;
        }
        if (currentPage === "Portfolio") {
          return <Portfolio />;
        }
        if (currentPage === "Career") {
          return <Career />;
        }
        if (currentPage === "Volunteer") {
          return <Volunteer />;
        }
        if (currentPage === "Contact") {
          return <Contact />;
        }
      };
    
      const handlePageChange = (page) => setCurrentPage(page);

      <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <FooterApp />
    </div>
}