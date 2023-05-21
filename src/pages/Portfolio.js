import React from "react";
import ArtMart from "../components/Projects/ArtMart";
import ADITL from "../components/Projects/ADITL";
import MovieMoodboard from "../components/Projects/MovieMoodboard";
import TopSVG from "../components/TopSVG";
import BottomSVG from "../components/BottomSVG";


function Portfolio() {
  return (
    <>
      <TopSVG />

      <h1 className="pt-5 font-bold" id="otherPage">
        Project Portfolio
        <hr className="w-[130%] -translate-x-12 md:pb-5"></hr>
      </h1>

      <ArtMart />
      <hr className="md:m-5"></hr>
      <ADITL />
      <hr className="md:m-5"></hr>
      <MovieMoodboard />

      <BottomSVG />
    </>
  );
}

export default Portfolio;
