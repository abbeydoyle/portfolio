import React from "react";

export default function DB() {

  return (
    <>
      <div className="flex md:-space-x-8 -space-y-12 md:-space-y-0 overflow-hidden flex flex-wrap justify-center">
        <div className="inline-block h-[20rem] w-[20rem] rounded-full bg-[#e7ece4] z-30 shadow-xl">
          <h2 className="text-center h-screen pt-[35%] leading-10">
            Dobyns-Bennett <br/>High School
          </h2>
        </div>

        <div className="inline-block h-[20rem] w-[20rem] rounded-full bg-[#f0f3ee] z-20 shadow-xl">
          <h3 className="text-center h-screen pt-[35%] pl-[10%] pr-[10%] leading-10">
            High School Diploma
          </h3>
        </div>

        <div className="inline-block h-[20rem] w-[20rem] rounded-full bg-[#f8f9f7] z-10 shadow-xl">
        <p className="text-center h-screen z-50 pt-[15%] pl-[10%] pr-[10%] leading-8">
        GPA: 3.758
            <br />
            Magna Cum Laude
            <br />
            Competitve Symphony
            <br />
            AP Courses: Calculus, Biology, US and European History, Spanish, English Language and Literature, and Psychology
          </p>
        </div>
      </div>
    </>
  );
}