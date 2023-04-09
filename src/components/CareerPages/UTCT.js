import React, { useState } from "react";
import UTCTAlert from "./CareerAlerts/UTCTAlert";

export default function UTCT() {
  const [showUTCTModal, setshowUTCTModal] = useState(false);

  return (
    <>
      <div className="wrap w-full mx-auto mb-5">
        <div className="md:grid md:grid-cols-10 hidden">
          <div className="row-span-full col-span-5 col-start-1 self-center p-4 text-white bg-[#acc2d3] rounded-lg z-10 h-[40%]  grid content-around">
            <h1 className="text-2xl font-bold mt-0">
            The University of Tennessee at Chattanooga
            </h1>
            <p className="mb-2 text-xl">Tutor</p>
            <p className="mb-2">January 2017 – December 2017</p>
          </div>
          <div className="row-span-full col-end-11 col-span-7 self-center">
            <div className="object-cover rounded-lg bg-[#bf997e]  p-5">
              <p className="pl-[30%]">
              UTC’s peer tutoring program is free to all students, including both individual and group sessions. In order to become a UTC tutor, I took a 15 week long course to become certified by the state of Tennessee. In this program, I learned how to assess different learning styles, teaching time management skills, professional ethics, communication styles (including active listening and responding and question asking strategy), intercultural communication, and group management skills. Upon completion, I began tutoring for General Chemistry I and II and Organic Chemistry I. Throughout the year I tutored approximately 20 individuals and 3 weekly group sessions.
              </p>
              <button
                className="float-right hover:text-[#725038] hover:underline"
                onClick={() => {
                  setshowUTCTModal(true);
                }}
              >
                View Job Roles
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:invisible text-white bg-[#acc2d3] rounded-lg p-4">
        <h1 className="text-2xl font-bold mt-0">The University of Tennessee at Chattanooga</h1>
        <p className="mb-2 text-xl">Tutor</p>
        <p className="mb-2 text-xl">January 2017 – December 2017</p>
        <button
                className="float-right hover:text-[#725038] hover:underline"
                onClick={() => {
                  setshowUTCTModal(true);
                }}
              >
                View Job Roles
              </button>
      </div>
      {showUTCTModal && <UTCTAlert setOpenUTCTModal={setshowUTCTModal} />}
    </>
  );
}
