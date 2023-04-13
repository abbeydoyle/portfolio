// dependencies
import React, { useState, Fragment } from "react";
import { Navbar } from "flowbite-react";
import logo from "../assets/logo.png";
import Resume from "../pages/Resume";
import "../index.css"
import { useLocation } from "react-router-dom";
import { Transition } from '@headlessui/react'


// navbar header
function Header() {
  const [showResumeModal, setshowResumeModal] = useState(false);

  const location = useLocation();
   const { pathname } = location;
   const splitLocation = pathname.split("/");

  return (

    <Navbar
      fluid={true}
      className={splitLocation[1] !== "" ? "header w-full bg-transparent" : "aboutHeader w-full bg-transparent"}
      id="header"
      rounded={true}
    >
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
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
        <Navbar.Link href="/education">
          <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0 md:text-white hover:underline text-[#3F5451]">
            Education
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
        <Navbar.Link
          onClick={() => {
            setshowResumeModal(true);
          }}
          className="no-underline"
        >
          <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:text-white md:p-0 text-[#3F5451] hover:underline">
            Resume
          </span>
        </Navbar.Link>
        <Navbar.Link href="/contact">
          <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent md:p-0 md:text-white text-[#3F5451] hover:underline">
            Contact
          </span>
        </Navbar.Link>
      </Navbar.Collapse>
      {showResumeModal && <Transition
      show={showResumeModal}
      enter="transition duration-1000 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-1000 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    ><Resume setOpenResumeModal={setshowResumeModal} /> </Transition>}
    </Navbar>

  );
}

export default Header;
