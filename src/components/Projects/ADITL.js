import React from "react";
export default function ADITL() {
  return (
    <>
      <div className="md:grid md:grid-cols-2">
        <div className="md:pr-[10%] grid content-center hidden md:block pt-[10%]">
          <h2 className="font-semibold">A Day in the Leaf</h2>
          <hr></hr>
          <h3 className="text-xl leading-10 pb-2">
            A full-stack application using RESTful APIs to implement a plant
            care app allowing a user to track the automated watering schedule,
            light exposure, and other health concerns of multiple plants.
            Deleting a plant sends it to the user's graveyard. This data is
            saved within their profile and available to them upon a later login.
          </h3>
          <h4 className="text-lg leading-10 pb-5">
            Technologies: HTML, CSS, JS, TailwindCSS, Node, Express, Handlebars,
            MySQL, Sequelize, CronJob, Chalk, Session-express, bcrypt, dotenv{" "}
          </h4>
          <div className="flex justify-around">
            <a
              href="https://a-day-in-the-leaf.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="text-black hover:text-[#725038] hover:underline"
            >
              Deployed Application
            </a>
            <a
              href="https://github.com/abbeydoyle/A-Day-in-the-Leaf"
              target="_blank"
              rel="noreferrer"
              className="text-black hover:text-[#725038] hover:underline"
            >
              Github Repository
            </a>
          </div>
        </div>
        <div className="gallery w-full">
          <img
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681033403/Screen_Shot_2023-04-09_at_2.41.50_AM_upneuf.png"
            alt="sign in"
          />
          <img
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681033927/Screen_Shot_2023-04-09_at_2.51.48_AM_eysrzy.png"
            alt="a day in the leaf logo"
          />
          <img
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681032588/Screen_Shot_2023-04-09_at_2.18.16_AM_emdaxo.png"
            alt="graveyard plant"
          />
          <img
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681032605/Screen_Shot_2023-04-09_at_2.12.22_AM_dk7bs2.png"
            alt="plant page"
          />
          <img
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681032826/Screen_Shot_2023-04-09_at_2.14.51_AM_wf8dyr.png"
            alt="single plant page"
          />
          <img
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681032946/Screen_Shot_2023-04-09_at_2.02.48_AM_tpccou.png"
            alt="add plant"
          />
          <img
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681033552/Screen_Shot_2023-04-09_at_2.45.30_AM_uzizwy.png"
            alt="delete"
          />
        </div>
      </div>

      <div className="md:pl-[10%] grid content-center md:hidden">
        <h2 className="font-semibold">A Day in the Leaf</h2>
        <hr></hr>
        <h3 className="text-xl leading-10 pb-2">
          A full-stack application using RESTful APIs to implement a plant care
          app allowing a user to track the automated watering schedule, light
          exposure, and other health concerns of multiple plants. Deleting a
          plant sends it to the user's graveyard. This data is saved within
          their profile and available to them upon a later login.
        </h3>
        <h4 className="text-lg leading-10 pb-5">
          Technologies: HTML, CSS, JS, TailwindCSS, Node, Express, Handlebars,
          MySQL, Sequelize, CronJob, Chalk, Session-express, bcrypt, dotenv{" "}
        </h4>
        <div className="flex justify-around">
          <a
            href="https://a-day-in-the-leaf.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="text-black hover:text-[#725038] hover:underline"
          >
            Deployed Application
          </a>
          <a
            href="https://github.com/abbeydoyle/A-Day-in-the-Leaf"
            target="_blank"
            rel="noreferrer"
            className="text-black hover:text-[#725038] hover:underline"
          >
            Github Repository
          </a>
        </div>
      </div>
    </>
  );
}
