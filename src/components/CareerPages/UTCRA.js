import React, { useState } from "react";
import UTCRAAlert from "./CareerAlerts/UTCRAAlert";

export default function UTCRA() {
  const [showUTCRAModal, setshowUTCRAModal] = useState(false);

  return (
    <>
    <div className="wrap w-full mx-auto mb-5">
        <div className="md:grid md:grid-cols-10 hidden">
          <div className="row-span-full col-start-1 col-span-7 self-center">
            <div className="object-cover rounded-lg bg-[#c7a68f] p-5 pl-8 shadow-xl">

              <p className="pr-[30%]">
              The Brock Scholars Program at UTC is a four year interdisciplinary program designed to provide students with the opportunity join multiple curriculums for a specialized area of study to present in an undergraduate thesis. The Brock Scholars Program encourages multiple years of research and involvement in other university groups.
              </p>
              <p  className="pr-[30%]">
              Tasked with interviewing a professor for an honors class, I met with my Introduction to Chemical Engineering professor, Dr. Bradley Harris. He told me about a research project he was just getting started with regarding the influence of environmental factors on the pathogenicity of Vibrio cholerae, the causative bacteria for cholera. After asking to be a part of the team, I began training with aseptic technique by a biology professor and decided to add a biology minor onto my degree. We developed hypotheses, protocols, and SOPs to test four different environmental fatty acids on both pathogenicity and persistence and soon we were writing grants for funding and purchasing equipment like a bioreactor. We recruited more students through my mentorship role in the honors college and had a fully functioning team of professors and students. My biology minor led me to take classes like genetics which gave us the opportunity to begin a research paper mapping the genes of V. cholerae under external stress. Over the course of my 3 years researching, I presented at 5 different conferences, trained around 6 students, developed numerous protocols, led weekly findings meetings, and passed a thesis.
              </p>

              <button
                className="float-left hover:text-[#725038] hover:underline"
                onClick={() => {
                  setshowUTCRAModal(true);
                }}
              >
                View Job Roles
              </button>
            </div>
          </div>
          <div className="row-span-full col-span-5 col-end-11 self-center p-4 text-white bg-[#a1bacd] rounded-lg h-[30%]  grid content-around shadow-xl">
            <h1 className="text-2xl font-bold mt-0">The University of Tennessee at Chattanooga</h1>
            <p className="mb-2 text-xl">Laboratory Research Lead</p>
            <p className="mb-2">January 2016 - May 2019</p>
          </div>
        </div>
      </div>
      <div className="md:invisible text-white bg-[#a1bacd] rounded-lg p-4 shadow-xl">
        <h1 className="text-2xl font-bold mt-0">The University of Tennessee at Chattanooga</h1>
        <p className="mb-2 text-xl">Laboratory Research Lead</p>
        <p className="mb-2 text-xl">January 2016 - May 2019</p>
        <button
                className="float-right hover:text-[#725038] hover:underline"
                onClick={() => {
                  setshowUTCRAModal(true);
                }}
              >
                View Job Roles
              </button>
      </div>
      {showUTCRAModal && <UTCRAAlert setOpenUTCRAModal={setshowUTCRAModal} />}
    </>
  );
}
