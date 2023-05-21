import React from "react";
import CDC from "../components/CareerPages/CDC";
import Boeing from "../components/CareerPages/Boeing";
import Sanofi from "../components/CareerPages/Sanofi";
import ORISE from "../components/CareerPages/ORISE";
import UTCRA from "../components/CareerPages/UTCRA";
import UTCT from "../components/CareerPages/UTCT";
import TupeloHoney from "../components/CareerPages/TupeloHoney";
import TopSVG from "../components/TopSVG";
import BottomSVG from "../components/BottomSVG";

function Career() {
  return (
    <>
      <TopSVG />

      <h1 className="pt-5 font-bold md:pb-8" id="otherPage">
        Career History
        <hr className="w-[130%] -translate-x-10"></hr>
      </h1>

      <Boeing />
      <CDC />
      <Sanofi />
      <ORISE />
      <UTCRA />
      <UTCT />
      <TupeloHoney />

      <BottomSVG />
    </>
  );
}

export default Career;
