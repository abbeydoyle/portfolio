import React from "react";
import EVALI from "../assets/EVALI.pdf";
import Thesis from "../assets/Thesis.pdf";

const svgStyle = {
  height: "560px",
  width: "100%",
  zIndex: "-10",
  overflow: "hidden",
  position: "fixed",
  top: "0",
};
const svgStyleFlip = {
  height: "560px",
  width: "100%",
  zIndex: "-10",
  overflow: "hidden",
  transform: "scale(-1, -1)",
  position: "fixed",
  bottom: "0",
};

function Publications() {
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

      <h1 className="pt-5 font-bold" id="otherPage">
        Publications
        <hr className="w-[120%] -translate-x-5"></hr>
      </h1>
      <div className="grid md:grid-cols-2 gap-8 md:mt-[5%] md:mb-[5%]">
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 md:py-[5%]">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1680931032/Screen_Shot_2023-04-07_at_10.16.16_PM_x3n70c.png"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Vitamin E Acetate in Bronchoalveolar-Lavage Fluid Associated with
              EVALI
            </h5>
            <a
              href={EVALI}
              download="EVALI.pdf"
              className="hover:text-[#725038] hover:underline text-[#573d2b]"
            >
              Download
            </a>
          </div>
        </div>

        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 md:py-[5%]">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1680931041/Screen_Shot_2023-04-07_at_10.16.48_PM_mj4rgk.png"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Influence of environmental conditions on fatty acid-induced
              changes in Vibrio cholerae persistence and pathogenicity
            </h5>
            <a
              href={Thesis}
              download="Thesis.pdf"
              className="hover:text-[#725038] hover:underline text-[#573d2b]"
            >
              Download
            </a>
          </div>
        </div>
      </div>

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

export default Publications;
