import React, { useState } from "react";
import CDCAlert from "./CareerAlerts/CDCAlert";

export default function CDC() {
  const [showCDCModal, setshowCDCModal] = useState(false);

  return (
    <>
      <div className="wrap w-full mx-auto mb-5">
        <div className="grid grid-cols-10">
          <div className="row-span-full col-span-5 col-start-1 self-center p-4 text-white bg-[#acc2d3] rounded-lg z-10 h-[30%]  grid content-around">
            <h1 className="text-2xl font-bold mt-0">
              CDC - Battelle | Emergency Response Branch
            </h1>
            <p className="mb-2 text-xl">Research Chemist</p>
            <p className="mb-2">July 2019 – February 2022</p>
          </div>
          <div className="row-span-full col-end-11 col-span-7 self-center">
            <div className="object-cover rounded-lg bg-[#bf997e]  p-5">
              <p className="pl-[30%]">
                Originally hired to automate liquid handling to create a high
                throughput emergency response protocols, things quickly changed
                pace into an emergency response role. After completing all
                mandatory trainings and learning branch protocols, a new illness
                started appearing among e-cigarette users. The lung injury
                working group, comprising of three branches, began accepting
                specimen from affected individuals. In short, my role was
                coordination with state public health labs, sample preparation,
                coordination between branches and analysts, and creating all
                appropriate documentation (i.e. chain of custody paperwork).{" "}
              </p>
              <p className="pl-[30%]">
                Shortly after the Lung Injury Response, we transitioned directly
                into the COVID-19 era. CDC Task Forces operate with the aid of
                internal volunteers. With both Lung Injury and COVID-19, many of
                our lab staff volunteer in lengthy rotations to serve as task
                force responders. Some work as communications and public
                relations aids while others work in the response environment
                with state and local health departments. My involvement included
                programming liquid handlers to aliquot samples for high
                throughput COVID testing services. Lab operations have slowed,
                but we currently maintain all response method testing and
                proficiency testing.{" "}
              </p>
              <button
                className="float-right hover:text-[#725038] hover:underline"
                onClick={() => {
                  setshowCDCModal(true);
                }}
              >
                View Job Roles
              </button>
            </div>
          </div>
        </div>
      </div>
      {showCDCModal && <CDCAlert setOpenCDCModal={setshowCDCModal} />}
    </>
  );
}
