import React from "react";

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

function About() {
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

      <h1 className="pt-5 text-[#3F5451] font-bold" id="aboutMe">About Me</h1>

      <div className="px-6 py-8 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 flex">
          <div className="mb-12 lg:mb-0">
              <img
                src="https://res.cloudinary.com/duxmtidm1/image/upload/v1680833230/IMG_1308_il2unr.png"
                className="w-full rounded-lg shadow-lg"
                alt="profile"
              />
            </div>
            <div className="mt-12 lg:mt-0">
              <p className="text-lg self-start md:leading-10 ">
                My name is Abbey Doyle. I'm an environmental engineer working
                for Boeing, currently in the progress of getting a Professional
                Certificate in full stack development at the University of
                Washington. After growing up in Kingsport, TN I left to get my
                bachelor's degree in Chattanooga, TN. There I studied chemical
                engineering and biology while in the Brock Scholars Program. I
                completed an undergraduate thesis while researching the
                pathogenicity of Vibrio cholerae and completed internships and
                the Center for Disease Control and Prevention and Chattem
                Sanofi. After graduating I began my career as a research chemist
                at the CDC through Battelle and worked in the Lung Injury and
                COVID-19 responses. After living in Atlanta for 3 years I moved
                crosscountry to Seattle, where I reside in my current job role.
                In my free time I like to backpack, read, run, play the violin
                or piano, and take my dog to parks. Throughout my education and
                career I learned languages like: Python, MATLAB, VBA, CAD
                software, JS, CSS, HTML, RestFUL APIs, the MERN stack,
                object-oriented programing, etc. I became fascinated with all of
                the minor differences in softwares that make or break a code and
                love the challenges that arise when writing a method start to
                finish.
              </p>
            </div>
            
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

export default About;
