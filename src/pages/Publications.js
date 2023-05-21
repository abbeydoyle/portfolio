import React from "react";
import EVALI from "../assets/EVALI.pdf";
import Thesis from "../assets/Thesis.pdf";
import TopSVG from "../components/TopSVG";
import BottomSVG from "../components/BottomSVG";

function Publications() {
  return (
    <>
      <TopSVG />

      <h1
        className="md:mt-8 md:mb-8 pt-2 font-bold text-center md:pb-5"
        id="otherPage"
      >
        Publications
        <hr className="w-[130%] -translate-x-6"></hr>
      </h1>
      <div className="grid md:grid-cols-2 gap-8 md:mt-[5%] md:mb-[5%]">
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 md:py-5">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1680931032/Screen_Shot_2023-04-07_at_10.16.16_PM_x3n70c.png"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Vitamin E Acetate in Bronchoalveolar-Lavage Fluid Associated with
              EVALI
            </h5>
            <a
              href={EVALI}
              download="EVALI.pdf"
              className="hover:text-[#725038] hover:underline text-[#573d2b]"
            >
              Download
            </a>
          </div>
        </div>

        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1680931041/Screen_Shot_2023-04-07_at_10.16.48_PM_mj4rgk.png"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Influence of environmental conditions on fatty acid-induced
              changes in Vibrio cholerae persistence and pathogenicity
            </h5>
            <a
              href={Thesis}
              download="Thesis.pdf"
              className="hover:text-[#725038] hover:underline text-[#573d2b]"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      <BottomSVG />
    </>
  );
}

export default Publications;
