import React, { useState } from "react";
import BoeingAlert from "./CareerAlerts/BoeingAlert";

export default function Boeing() {
  const [showBoeingModal, setshowBoeingModal] = useState(false);

  return (
    <>
    <div className="wrap w-full mx-auto mb-5">
        <div className="grid grid-cols-10 ">
          <div className="row-span-full col-start-1 col-span-7 self-center">
            <div className="object-cover rounded-lg bg-[#b48868] p-5 pl-8">

              <p className="pr-[30%]">
              Boeing is one of the world's largest aerospace companies, known for designing, manufacturing, and selling airplanes, helicopters, satellites, and missiles. Founded in Seattle, Washington in 1916, the company has grown to become a global leader in the aviation industry, with operations in over 65 countries and a workforce of more than 140,000 employees. Boeing is known for its iconic commercial jetliners such as the 747, 777, and 787, as well as its defense and space products. The company's commitment to innovation and safety has made it a trusted brand in the aviation industry for over a century.
              </p>
              <p  className="pr-[30%]">
              As an environmental engineer at Boeing, I work to ensure that the company operates in an environmentally sustainable and responsible manner. This involves developing and implementing strategies to minimize the environmental impact of the company's operations, such as reducing greenhouse gas emissions, managing hazardous waste, and conserving natural resources. I work daily with other engineers, scientists, and environmental professionals to identify and mitigate environmental risks and to develop innovative solutions to complex environmental challenges. My favorite tasks typically revolve around remediation and conservation, working Boeing's commitment to sustainability and responsible environmental stewardship, while helping to ensure the company's continued success in the aviation industry.
              </p>

              <button
                className="float-left hover:text-[#725038] hover:underline"
                onClick={() => {
                  setshowBoeingModal(true);
                }}
              >
                View Job Roles
              </button>
            </div>
          </div>
          <div className="row-span-full col-span-5 col-end-11 self-center p-4 text-white bg-[#c1d2de] rounded-lg  h-[30%]  grid content-around">
            <h1 className="text-2xl font-bold mt-0">Boeing | Environmental, Health, and Safety</h1>
            <p className="mb-2 text-xl">Environmental Engineer</p>
            <p className="mb-2">February 2022 - Present</p>
          </div>
        </div>
      </div>
      {showBoeingModal && <BoeingAlert setOpenBoeingModal={setshowBoeingModal} />}
    </>
  );
}
