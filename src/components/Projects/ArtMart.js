import React from "react";
export default function ArtMart() {
  return (
    <>
      <div className="md:grid md:grid-cols-2">
        <div className="gallery md:w-full w-[30%] -translate-x-5 md:translate-x-0">
          <img
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681018822/Screen_Shot_2023-04-08_at_10.40.01_PM_sfrazj.png"
            alt="logout"
          />
          <img
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681017135/Screen_Shot_2023-04-08_at_10.11.03_PM_bmyw9y.png"
            alt="artmart logo"
          />
          <img
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681018332/Screen_Shot_2023-04-08_at_10.31.33_PM_hwyem8.png"
            alt="focused gallery page"
          />
          <img
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681016598/Screen_Shot_2023-04-08_at_10.02.54_PM_o9x4xr.png"
            alt="gallery page"
          />
          <img
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681018697/Screen_Shot_2023-04-08_at_10.37.43_PM_u5zhss.png"
            alt="single art page"
          />
          <img
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681019068/Screen_Shot_2023-04-08_at_10.44.10_PM_cqhhkg.png"
            alt="sign up page"
          />
          <img
            src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681017329/Screen_Shot_2023-04-08_at_10.06.31_PM_egws0d.png"
            alt="cart"
          />
        </div>
        <div className="md:pl-[10%] grid content-center pt-[10%] hidden md:block">
            <h2 className="font-semibold">ArtMart</h2>
            <hr></hr>
            <h3 className="text-xl leading-10 pb-2"> A full-stack application using the MERN stack to create an art print e-commerce app allowing a user to create an account, add prints to their cart, and purchase them. The user can also log back in at a later date to find unpurchased items still in their cart.</h3>
            <h4 className="text-lg leading-10 pb-5">Technologies: HTML, CSS, JS, TailwindCSS, Node, Express, React, GraphQL, Apollo, MongoDB, Mongoose ODM, TailwindCSS, bcrypt, dotenv, Cloudinary, Stripe, Heroku</h4>
            <div className="flex justify-around">
            <a href="https://devartmart.herokuapp.com/" target="_blank" className="text-black hover:text-[#725038] hover:underline">Deployed Application</a>
            <a href="https://github.com/abbeydoyle/artmart.git" target="_blank" className="text-black hover:text-[#725038] hover:underline">Github Repository</a>
            </div>
        </div>
        
      </div>

      <div className="md:pl-[10%] grid content-center md:hidden">
            <h2 className="font-semibold">ArtMart</h2>
            <hr></hr>
            <h3 className="text-xl leading-10 pb-2"> A full-stack application using the MERN stack to create an art print e-commerce app allowing a user to create an account, add prints to their cart, and purchase them. The user can also log back in at a later date to find unpurchased items still in their cart.</h3>
            <h4 className="text-lg leading-10 pb-5">Technologies: HTML, CSS, JS, TailwindCSS, Node, Express, React, GraphQL, Apollo, MongoDB, Mongoose ODM, TailwindCSS, bcrypt, dotenv, Cloudinary, Stripe, Heroku</h4>
            <div className="flex justify-around">
            <a href="https://devartmart.herokuapp.com/" target="_blank" className="text-black hover:text-[#725038] hover:underline">Deployed Application</a>
            <a href="https://github.com/abbeydoyle/artmart.git" target="_blank" className="text-black hover:text-[#725038] hover:underline">Github Repository</a>
            </div>
        </div>
    </>
  );
}
