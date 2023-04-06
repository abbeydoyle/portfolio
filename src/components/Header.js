// dependencies
import React from "react";
import { Navbar } from "flowbite-react";
import logo from "../assets/logo.png"

// navbar header
function Header() {
  return (
    <Navbar fluid={true} rounded={true} className="bg-[url('https://res.cloudinary.com/duxmtidm1/image/upload/v1680803471/389877_olc7hw.jpg')] w-full header">
        <Navbar.Brand
          href="/"
        >
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
          />
          <span className="self-center md:text-2xl font-semibold whitespace-nowrap text-white">
            Abigail Doyle
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0 text-white hover:underline">
              About
            </span>
          </Navbar.Link>
          <Navbar.Link href="/portfolio">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0 text-white hover:underline">
              Portfolio
            </span>
          </Navbar.Link>
          <Navbar.Link href="/career">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0 text-white hover:underline">
              Career
            </span>
          </Navbar.Link>
          <Navbar.Link href="/volunteer">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0 text-white hover:underline">
              Volunteer
            </span>
          </Navbar.Link>
          <Navbar.Link href="/publications">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0 text-white hover:underline">
              Publications
            </span>
          </Navbar.Link>
          <Navbar.Link onClick={() => {
              
            }}>
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent text-white md:p-0">
              Resume
            </span>
          </Navbar.Link>
          <Navbar.Link href="/contact">
            <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0 text-white hover:text-[#c4d4e0] hover:underline">
              Contact
            </span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
}


export default Header