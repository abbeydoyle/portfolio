import React, { useState } from "react";
import SanofiAlert from "./CareerAlerts/SanofiAlert";

export default function Sanofi() {
  const [showSanofiModal, setshowSanofiModal] = useState(false);

  return (
    <>
      <div className="wrap w-full mx-auto mb-5">
        <div className="md:grid md:grid-cols-10 hidden">
          <div className="row-span-full col-start-1 col-span-7 self-center">
            <div className="object-cover rounded-lg bg-[#c7a68f] p-5 pl-8">
              <p className="pr-[30%]">
                When applying for my internship, I actually had no idea what
                being a cleaning validation intern would entail. Working with
                personal care items (such as Icy Hot, Goldbond, Act Mouthwash,
                etc.) requires strict protocols due to consumer use. For the
                duration of my internship, I worked in the R&D branch to create
                and then validate all cleaning procedures for the machinery used
                in the manufacturing of newly developed products. Once a chemist
                had formulated a new product at the bench level, they would then
                scale up to manufacture a batch at full scale. Next, I would
                determine the best products, temperatures, soaks, etc. that
                would be necessary in order to clean all equipment based off of
                the product formulations. I typically then wrote this into a
                working SOP to be used while the product was still being
                formulated. After each cleaning procedure, all equipment would
                be dissembled and checked thoroughly for any remaining residue
                to validate the working SOP. This was then written into a formal
                SOP and validated by my superiors to be used permanently in
                plant processes. I loved doing this mostly due to the
                dissembling and reassembling I got to do with the plant
                equipment. I found it really enjoyable to dissemble massive
                batch mixers and formulators and all of their joints and metal
                piping and then to reassemble it again.
              </p>
              <p className="pr-[30%]">
                Throughout my internship I also spent time going to the
                packaging plant and two manufacturing facilities to learn more
                about the processes and to troubleshoot equipment failure. This
                was typically done by watching the process, noting any
                differences between the batches at our facility and the one at
                the full-scale facilities. Many times the issues occurred with
                uneven heat distribution on larger equipment or incorrect
                equipment setup. My day to day activities included weekly DI
                water testing to ensure no contaminants came into contact with
                newly manufactured products and safety training implementation.
                Many of the cleaning validations I created became standard
                practice so I developed them into training presentations that
                had to be taken yearly by all plant staff.
              </p>

              <button
                className="float-left hover:text-[#725038] hover:underline"
                onClick={() => {
                  setshowSanofiModal(true);
                }}
              >
                View Job Roles
              </button>
            </div>
          </div>
          <div className="row-span-full col-span-5 col-end-11 self-center p-4 text-white bg-[#a1bacd] rounded-lg h-[30%]  grid content-around">
            <h1 className="text-2xl font-bold mt-0">
              Sanofi | Product Development
            </h1>
            <p className="mb-2 text-xl">
              Process Engineer and Cleaning Validation Intern
            </p>
            <p className="mb-2">August 2018 - May 2019</p>
          </div>
        </div>
      </div>
      <div className="md:invisible text-white bg-[#a1bacd] rounded-lg p-4">
        <h1 className="text-2xl font-bold mt-0">Sanofi | Product Development</h1>
        <p className="mb-2 text-xl">Process Engineer and Cleaning Validation Intern</p>
        <p className="mb-2 text-xl">August 2018 - May 2019</p>
        <button
                className="float-right hover:text-[#725038] hover:underline"
                onClick={() => {
                  setshowSanofiModal(true);
                }}
              >
                View Job Roles
              </button>
      </div>
      {showSanofiModal && (
        <SanofiAlert setOpenSanofiModal={setshowSanofiModal} />
      )}
    </>
  );
}
