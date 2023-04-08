import React, { useState } from "react";
import BoeingAlert from "./CareerAlerts/BoeingAlert";

export default function Boeing() {
  const [showBoeingModal, setshowBoeingModal] = useState(false);

  return (
    <>
    <div className="wrap w-full mx-auto mb-5">
        <div className="grid grid-cols-10 ">
          <div className="row-span-full col-start-1 col-span-7 self-center">
            <div className="object-cover rounded-lg bg-[#b48868] p-5 pl-8">

              <p className="pr-[30%]">
                + Create queries within Access databases to profile hazardous
                waste designationsto ensure safe practices and
                regulatory compliance
              </p>
              <p  className="pr-[30%]">
                + Routinely create required permit reports to the appropriate
                agency forenvironmental, health, and safety standards
              </p>

              <button
                className="float-left hover:text-[#725038] hover:underline"
                onClick={() => {
                  setshowBoeingModal(true);
                }}
              >
                View Job Roles
              </button>
            </div>
          </div>
          <div className="row-span-full col-span-5 col-end-11 self-center p-4 text-white bg-[#c1d2de] rounded-lg  h-[30%]  grid content-around">
            <h1 className="text-2xl font-bold mt-0">Boeing | Environmental, Health, and Safety</h1>
            <p className="mb-2 text-xl">Environmental Engineer</p>
            <p className="mb-2">February 2022 - Present</p>
          </div>
        </div>
      </div>
      {showBoeingModal && <BoeingAlert setOpenBoeingModal={setshowBoeingModal} />}
    </>
  );
}
