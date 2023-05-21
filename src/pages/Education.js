import React from "react";
import UWA from "../components/EducationPages/UWA";
import UTC from "../components/EducationPages/UTC";
import DB from "../components/EducationPages/DB";
import TopSVG from "../components/TopSVG";
import BottomSVG from "../components/BottomSVG";

// TODO: horizontal scroll through circles phone

export default function Education() {
  return (
    <>
      <TopSVG />

      <h1
        className="pt-2 md:mt-8 text-center font-bold md:pb-8 pb-2"
        id="otherPage"
      >
        Education
        <hr className="w-[130%] -translate-x-6"></hr>
      </h1>

      <UWA />
      <hr className="md:hidden" />
      <UTC />
      <hr className="md:hidden" />
      <DB />

      <BottomSVG />
    </>
  );
}
