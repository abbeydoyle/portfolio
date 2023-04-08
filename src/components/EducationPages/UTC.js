import React from "react";

export default function UTC() {

  return (
    <>
      <div className="flex -space-x-8 overflow-hidden">
        <div className="inline-block h-[20rem] w-[20rem] rounded-full bg-[#e7ece4] z-30">
          <h2 className="text-center h-screen pt-[35%] leading-10">
            University of Tennessee at Chattanooga
          </h2>
        </div>

        <div className="inline-block h-[20rem] w-[20rem] rounded-full bg-[#f0f3ee] z-20">
          <h3 className="text-center h-screen pt-[25%] pl-[10%] pr-[10%] leading-10">
            Bachelor's of Science
            <br />
            Chemical Engineering
          </h3>
        </div>

        <div className="inline-block h-[20rem] w-[20rem] rounded-full bg-[#f8f9f7] z-10">
          <p className="text-center h-screen z-50 pt-[25%] pl-[10%] pr-[10%] leading-8">
            GPA: 3.763
            <br />
            Magna Cum Laude
            <br />
            Biology Minor
            <br />
            Brock Scholar's Program
            <br />
            UTC Symphony
          </p>
        </div>
      </div>
    </>
  );
}