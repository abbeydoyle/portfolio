import React, { useState } from "react";
import TechAlert from "./TechAlert";

export default function UWA() {
  const [showTechAlertModal, setshowTechAlertModal] = useState(false);

  return (
    <>
      <div className="flex md:-space-x-8 -space-y-12 md:-space-y-0 overflow-hidden flex flex-wrap justify-center">
        <div className="inline-block h-[20rem] w-[20rem] rounded-full bg-[#e7ece4] z-30">
          <h2 className="text-center h-screen pt-[35%] leading-10">
            University of Washington
          </h2>
        </div>

        <div className="inline-block h-[20rem] w-[20rem] rounded-full bg-[#f0f3ee] z-20">
          <h3 className="text-center h-screen pt-[25%] pl-[10%] pr-[10%] leading-10">
            Professional Certificate
            <br />
            Full Stack Development
          </h3>
        </div>

        <div className="inline-block h-[20rem] w-[20rem] rounded-full bg-[#f8f9f7] z-10">
          <p className="text-center h-screen z-50 pt-[22%] pl-[10%] pr-[10%]">
            MERN Stack, Cloud Services, Agile Development, CI/CD pipelines, Test
            Driven Developmen, Pair Programming
            <br />
            The DOM, OOP, MVC Paradigm, Progressive Web App <br />
            <button
              className="hover:text-[#725038] hover:underline pt-3"
                  onClick={() => {
                    setshowTechAlertModal(true);
                  }}
            >
              View Technologies Learned
            </button>
          </p>
        </div>
      </div>
      {showTechAlertModal && <TechAlert setOpenTechAlertModal={setshowTechAlertModal} />}
    </>
  );
}
