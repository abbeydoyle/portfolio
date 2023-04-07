import React from "react";
import { Carousel } from "flowbite-react";

const svgStyle = {
  height: "560px",
  width: "100%",
  zIndex: "-10",
  overflow: "hidden",
  marginTop: "-40vw",
};

function Portfolio() {
  return (
    <>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="svg absolute hidden lg:block"
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

      <h1 className="pt-5 text-[#3F5451] font-bold" id="otherPage">Project Portfolio</h1>


      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slide={false}>
    <img
      src="https://res.cloudinary.com/duxmtidm1/image/upload/v1680833230/IMG_1308_il2unr.png"
      alt="..."
    />
    <img
      src="https://res.cloudinary.com/duxmtidm1/image/upload/v1680833230/IMG_1308_il2unr.png"
      alt="..."
    />
    <img
      src="https://res.cloudinary.com/duxmtidm1/image/upload/v1680833230/IMG_1308_il2unr.png"
      alt="..."
    />
    <img
      src="https://res.cloudinary.com/duxmtidm1/image/upload/v1680833230/IMG_1308_il2unr.png"
      alt="..."
    />
    <img
      src="https://res.cloudinary.com/duxmtidm1/image/upload/v1680833230/IMG_1308_il2unr.png"
      alt="..."
    />
  </Carousel>
</div>
    </>
  );
}

export default Portfolio;
