import React, { useState } from "react";
import Backpacking from "../components/Hobbies/Backpacking";
import Duna from "../components/Hobbies/Duna";
import Reading from "../components/Hobbies/Reading";
import Violin from "../components/Hobbies/Violin";

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
  const [showBackpackingModal, setshowBackpackingModal] = useState(false);
  const [showDunaModal, setshowDunaModal] = useState(false);
  const [showReadingModal, setshowReadingModal] = useState(false);
  const [showViolinModal, setshowViolinModal] = useState(false);
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

      <h1 className="pt-5 font-bold" id="aboutMe">
        About Me
        <hr className="w-[130%] -translate-x-7"></hr>
      </h1>

      <div className="px-6 py-8 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 flex">
            <div className="mb-0">
              <img
                src="https://res.cloudinary.com/duxmtidm1/image/upload/v1680833230/IMG_1308_il2unr.png"
                className="w-full rounded-lg shadow-lg"
                alt="profile"
              />
            </div>
            <div className="md:mt-12 lg:mt-0">
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

      <div className="grid lg:grid-cols-2 gap-12 flex">
        <div className="">
          <div>
            <h2>Boeing</h2>
            <hr></hr>
            <p>
              “Abbey has been a great addition to the team and is spoken of very
              highly by team members. I appreciate her honest communication and
              the fact that she is willing to take on a variety of different
              tasks. Abbey has a consistently positive and upbeat attitude and
              is very technically competent. Other members of the team have
              noted she is a fast learning, is diligent, and has good attention
              to detail.” <br />– 2022 Performance Review
            </p>
          </div>

          <div>
            <h2>CDC</h2>
            <hr></hr>
            <p>
            “She was an invaluable asset to the lab during the lung injury response earlier this year and it’s worth noting, she nearly handled the response singlehandedly for the IRL (Incidents Response Lab). She has been a source of continuity in the lab this year as many staff have transitioned out of the lab. She has worked diligently in the IRL, taken on more tasks and helped maintain continuity during staff transitions. She communicates well and is responsive to both Battelle and CDC requirements.”<br />– 2020 Performance Review
            </p>
          </div>

        </div>

        <div className="md:pl-[45%] pl-[35%] mb-[20%]">
        <h2 className="-pl-[40%]">Hobbies</h2>
            <hr className="-ml-[60%]"></hr>
          <div className="">
            <div className="">
              <div
                className="venncirctop p-[18px] w-[240px] h-[240px] rounded-full absolute transition duration-500 ease-in-out mb-[-130px] ml-[-70px] bg-[#5c5b59] z-10
              hover:z-50 hover:bg-[#6A6561]
              "
              >
                <button
                  className="venntxttop hover:text-[#FFFFFF] text-[#FFFFFF] text-2xl font-bold text-center relative z-50 inline-block pl-[30%] pt-[10%]"
                  onClick={() => {
                    setshowViolinModal(true);
                  }}
                >
                  Violin
                </button>
              </div>

              <div
                className="venncirclft p-[18px] w-[240px] h-[240px] rounded-full absolute transition duration-500 ease-in-out ml-[-157px] bg-[#093d5c] z-20
              hover:z-50 hover:bg-[#37688C]
              "
              >
                <button
                  className="venntxtlft float-left hover:text-[#FFFFFF] text-[#FFFFFF] text-2xl font-bold relative inline-block pt-[40%]"
                  onClick={() => {
                    setshowDunaModal(true);
                  }}
                >
                  Duna
                </button>
              </div>

              <div
                className="
              venncircrt w-[240px] h-[240px] rounded-full absolute ml-[17px] mr-[100px] p-[18px] text-center bg-[#5e577b] transition duration-500 ease-in-out z-30 
              hover:z-50 hover:bg-[#625F75]
              "
              >
                <button
                  className="venntxtrt float-right hover:text-[#FFFFFF] text-[#FFFFFF] text-2xl font-bold relative inline-block pt-[40%]"
                  onClick={() => {
                    setshowReadingModal(true);
                  }}
                >
                  Reading
                </button>
              </div>

              <div
                className="
              venncircbtm w-[240px] h-[240px] rounded-full relative ml-[-70px] mr-[100px] text-center bg-[#627746] transition duration-500 ease-in-out top-[90px] p-[18px] z-10
              hover:z-50 hover:bg-[#3a4e20]
              "
              >
                <button
                  className="venntxtbtm hover:text-[#FFFFFF] text-[#FFFFFF] text-2xl font-bold text-center relative z-50 inline-block pt-[70%]"
                  onClick={() => {
                    setshowBackpackingModal(true);
                  }}
                >
                  Backpacking
                </button>
              </div>
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
      {showBackpackingModal && <Backpacking setOpenBackpackingModal={setshowBackpackingModal} />}
      {showDunaModal && <Duna setOpenDunaModal={setshowDunaModal} />}
      {showReadingModal && <Reading setOpenReadingModal={setshowReadingModal} />}
      {showViolinModal && <Violin setOpenViolinModal={setshowViolinModal} />}
    </>
  );
}

export default About;
