import React, { useState } from "react";
import ORISEAlert from "./CareerAlerts/ORISEAlert";

export default function ORISE() {
  const [showORISEModal, setshowORISEModal] = useState(false);

  return (
    <>
      <div className="wrap w-full mx-auto mb-5">
        <div className="grid grid-cols-10">
          <div className="row-span-full col-span-5 col-start-1 self-center p-4 text-white bg-[#96b2c8] rounded-lg z-10 h-[30%]  grid content-around">
            <h1 className="text-2xl font-bold mt-0">
            CDC - ORISE | Emergency Response Branch
            </h1>
            <p className="mb-2 text-xl">ORISE Fellow</p>
            <p className="mb-2">May 2018 – August 2018</p>
          </div>
          <div className="row-span-full col-end-11 col-span-7 self-center">
            <div className="object-cover rounded-lg bg-[#d2b7a4]  p-5">
              <p className="pl-[30%]">
              The Emergency Response Branch (ERB) develops and performs unique laboratory tests to assess chemical exposures during a public health emergency or terrorist event. In a public health emergency, the rapid detection and accurate identification of chemical agents can be crucial for diagnosis, treatment, and prevention. However, this rapid response depends heavily on sample logistics which comprises a series of steps to maintain sample integrity (such as sample receiving logistics, accessioning, aliquoting, chain of custody forms, and final distribution to the testing laboratories). The Incident Response Lab (IRL) is the central operating center for biological samples and reference standards within both the ERB and Laboratory Response Network for Chemical Threats (LRN-C).
              </p>
              <p className="pl-[30%]">
              While an ORISE fellow, I spent the majority of my time programming Hamilton Robotics automated liquid handlers. These are used for high throughout aliquoting in large quantities. I programed them for user input including: sample quantity, desired volume, and specimen matrix as well as original and desired containers. I also programmed them to scan ID barcodes and export them to an excel sheet in order to decrease any human error during record keeping. In a response, lab staff are doing many jobs at once. These liquid handlers allows a user to load the robotics deck, input the desired information, and step away to work on the many other tasks at hand without compromising sample or testing integrity.
              </p>
              <button
                className="float-right hover:text-[#725038] hover:underline"
                onClick={() => {
                  setshowORISEModal(true);
                }}
              >
                View Job Roles
              </button>
            </div>
          </div>
        </div>
      </div>
      {showORISEModal && <ORISEAlert setOpenORISEModal={setshowORISEModal} />}
    </>
  );
}
