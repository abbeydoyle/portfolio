// dependencies
import React from "react";
import { Navbar } from "flowbite-react";

// navbar header
const Header = ({ currentPage, handlePageChange }) => {
      return (
      <Navbar fluid={true} rounded={true}>
          <Navbar.Brand
            to="/"
          >
            <img
              src=""
              className="mr-3 h-6 sm:h-9"
              alt="ArtMart Logo"
            />
            <span className="self-center md:text-2xl font-semibold whitespace-nowrap text-[#508192]">
              ArtMart
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="/">
              <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent text-[#508192] md:p-0">
                Prints
              </span>
            </Navbar.Link>
            <Navbar.Link onClick={() => {
                
              }}>
              <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent text-[#508192] md:p-0">
                Log in
              </span>
            </Navbar.Link>
            <Navbar.Link onClick={() => {
                
              }}>
              <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent text-[#508192] md:p-0">
                Sign up
              </span>
            </Navbar.Link>
            <Navbar.Link onClick={() => {
                
              }}>
              <span className="block md:py-2 pl-3 pr-4 md:text-lg rounded bg-transparent text-[#508192] md:p-0">
                My Cart
              </span>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      );
    }


export default Header