import React, { useState } from "react";
import TupeloHoneyAlert from "./CareerAlerts/TupeloHoneyAlert";

export default function TupeloHoney() {
  const [showTupeloHoneyModal, setshowTupeloHoneyModal] = useState(false);

  return (
    <>
    <div className="wrap w-full mx-auto mb-5">
        <div className="md:grid md:grid-cols-10 hidden">
          <div className="row-span-full col-start-1 col-span-7 self-center">
            <div className="object-cover rounded-lg bg-[#b48868] p-5 pl-8 shadow-xl">

              <p className="pr-[30%]">
              Looking for a shift-based summer job to perform while researching, I began visiting local restaurants I enjoyed. Tupelo Honey is a southern restaurant with limited locations known for their weekend brunches. Located close to both campus and my house, I thought I would go in during off hours to determine if they were hiring. Due to an emergent back of house issue, I ended up waiting to talk to a manager for around an hour. This honestly didn’t bother me, as I had brought a book anyway. When I was finally able to talk to the regional manager, she said that because I seemed content to wait patiently and politely, she’d like to hire me as a server despite the fact that they weren’t actually hiring at the moment. During my time there I was promoted several times and had several repeat customers that asked for my section. Working as a waiter for gave me a unique opportunity to view the food service and hospitality industry from multiple perspectives; I recognize the necessity of detail-oriented scheduling, vendor negotiations, food safety issues and creating a unique and pleasurable dining experience for patrons.
              </p>
      
              <button
                className="float-left hover:text-[#725038] hover:underline"
                onClick={() => {
                  setshowTupeloHoneyModal(true);
                }}
              >
                View Job Roles
              </button>
            </div>
          </div>
          <div className="row-span-full col-span-5 col-end-11 self-center p-4 text-white bg-[#c1d2de] rounded-lg  h-[30%]  grid content-around shadow-xl">
            <h1 className="text-2xl font-bold mt-0">Tupelo Honey</h1>
            <p className="mb-2 text-xl">Server</p>
            <p className="mb-2">May 2017 - November 2017</p>
          </div>
        </div>
      </div>
      <div className="md:invisible text-white bg-[#c1d2de] w-full rounded-lg p-4 shadow-xl">
        <h1 className="text-2xl font-bold mt-0">Tupelo Honey</h1>
        <p className="mb-2 text-xl">Server</p>
        <p className="mb-2 text-xl">May 2017 - November 2017</p>
        <button
                className="float-right hover:text-[#725038] hover:underline"
                onClick={() => {
                  setshowTupeloHoneyModal(true);
                }}
              >
                View Job Roles
              </button>
      </div>
      {showTupeloHoneyModal && <TupeloHoneyAlert setOpenTupeloHoneyModal={setshowTupeloHoneyModal} />}
    </>
  );
}
