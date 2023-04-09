import React from "react";
import CDC from "../components/CareerPages/CDC";
import Boeing from "../components/CareerPages/Boeing";
import Sanofi from "../components/CareerPages/Sanofi";
import ORISE from "../components/CareerPages/ORISE";
import UTCRA from "../components/CareerPages/UTCRA";
import UTCT from "../components/CareerPages/UTCT";
import TupeloHoney from "../components/CareerPages/TupeloHoney";

const svgStyle = {
  height: "1500px",
  width: "100%",
  zIndex: "-10",
  overflow: "hidden",
  position: "fixed",
  top: "0",
};

const svgStyleFlip = {
  height: "1500px",
  width: "100%",
  zIndex: "-10",
  overflow: "hidden",
  transform: "scale(-1, -1)",
  position: "fixed",
  bottom: "0",
};

function Career() {
  return (
    <>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="svg absolute block"
        style={svgStyle}
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgb(242,235,230)" offset="0%"></stop>
            <stop stopColor="rgb(210,183,164)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
        ></path>
      </svg>

      <h1
        className="pt-5 font-bold"
        id="otherPage"
      >
        Career History
        <hr className="w-[120%] -translate-x-5"></hr>
      </h1>

      <Boeing />
      <CDC />
      <Sanofi />
      <ORISE />
      <UTCRA />
      <UTCT />
      <TupeloHoney />

      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="svg absolute block"
        style={svgStyleFlip}
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgb(242,235,230)" offset="0%"></stop>
            <stop stopColor="rgb(210,183,164)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
        ></path>
      </svg>
    </>
  );
}

export default Career;
