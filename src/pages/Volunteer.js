import React from "react";
import TrevorProject from "../components/Volunteering/TrevorProject";
import Animals from "../components/Volunteering/Animals";
import WomensShelters from "../components/Volunteering/WomensShelters";
import ParksDpt from "../components/Volunteering/ParksDpt";
import TopSVG from "../components/TopSVG";
import BottomSVG from "../components/BottomSVG";

export default function Volunteer() {
  return (
    <>
      <TopSVG />

      <h1
        className="pt-2 md:mt-8 text-center font-bold md:pb-8 pb-2"
        id="otherPage"
      >
        Volunteering
        <hr className="w-[130%] -translate-x-7"></hr>
      </h1>

      <TrevorProject />
      <Animals />
      <WomensShelters />
      <ParksDpt />

      <BottomSVG />
    </>
  );
}
