// dependencies
import React from "react";
import { Navbar } from "flowbite-react";
import logo from "../assets/logo.png"

// navbar header
function Header() {
  return (
    <Navbar fluid={true} rounded={true}>
        <Navbar.Brand
          to="/"
        >
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
          />
          <span className="self-center md:text-2xl font-semibold whitespace-nowrap text-[#508192]">
            Abigail Doyle
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0">
              About
            </span>
          </Navbar.Link>
          <Navbar.Link href="/portfolio">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0">
              Portfolio
            </span>
          </Navbar.Link>
          <Navbar.Link href="/career">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0">
              Career
            </span>
          </Navbar.Link>
          <Navbar.Link href="/volunteer">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0">
              Volunteer
            </span>
          </Navbar.Link>
          <Navbar.Link href="/publications">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0">
              Publications
            </span>
          </Navbar.Link>
          <Navbar.Link onClick={() => {
              
            }}>
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0">
              Resume
            </span>
          </Navbar.Link>
          <Navbar.Link href="/contact">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0">
              Contact
            </span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
}


export default Header