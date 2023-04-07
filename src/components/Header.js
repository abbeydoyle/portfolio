// dependencies
import React from "react";
import { Navbar } from "flowbite-react";
import logo from "../assets/logo.png"

// navbar header
function Header() {
  return (
    <Navbar fluid={true} className="md:bg-[url('https://res.cloudinary.com/duxmtidm1/image/upload/v1680803471/389877_olc7hw.jpg')] header">
        <Navbar.Brand
          href="/"
        >
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
          />
          <span className="self-center md:text-2xl font-semibold whitespace-nowrap md:text-white text-[#3F5451]">
            Abigail Doyle
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0 md:text-white hover:underline text-[#3F5451]">
              About
            </span>
          </Navbar.Link>
          <Navbar.Link href="/portfolio">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0 md:text-white hover:underline text-[#3F5451]">
              Portfolio
            </span>
          </Navbar.Link>
          <Navbar.Link href="/career">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0 md:text-white hover:underline text-[#3F5451]">
              Career
            </span>
          </Navbar.Link>
          <Navbar.Link href="/volunteer">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0 md:text-white hover:underline text-[#3F5451]">
              Volunteer
            </span>
          </Navbar.Link>
          <Navbar.Link href="/publications">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0 md:text-white hover:underline text-[#3F5451]">
              Publications
            </span>
          </Navbar.Link>
          <Navbar.Link onClick={() => {
              
            }}>
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:text-white md:p-0 text-[#3F5451]">
              Resume
            </span>
          </Navbar.Link>
          <Navbar.Link href="/contact">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0 md:text-white text-[#3F5451] hover:underline">
              Contact
            </span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
}


export default Header