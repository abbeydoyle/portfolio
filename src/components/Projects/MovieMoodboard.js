import React from "react";
export default function MovieMoodboard() {
      return (
            <>
              <div className="md:grid md:grid-cols-2">
                <div className="gallery md:w-full w-[30%] -translate-x-5 md:translate-x-0">
                  <img
                    src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681035975/Screen_Shot_2023-04-09_at_3.25.46_AM_iemzvy.png"
                    alt="soap tv"
                  />
                  <img
                    src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681034952/Screen_Shot_2023-04-09_at_3.08.59_AM_i5ivgn.png"
                    alt="movie moodboard logo"
                  />
                  <img
                    src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681035765/Screen_Shot_2023-04-09_at_3.22.29_AM_j7ipqz.png"
                    alt="western tv"
                  />
                  <img
                    src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681035406/Screen_Shot_2023-04-09_at_3.16.31_AM_h8xinw.png"
                    alt="search page"
                  />
                  <img
                    src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681036144/Screen_Shot_2023-04-09_at_3.28.47_AM_bgruc2.png"
                    alt="homepage drivein image"
                  />
                  <img
                    src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681036119/Screen_Shot_2023-04-09_at_3.28.14_AM_wffsz7.png"
                    alt="documentary tv"
                  />
                  <img
                    src="https://res.cloudinary.com/duxmtidm1/image/upload/v1681035671/Screen_Shot_2023-04-09_at_3.20.06_AM_vyk24x.png"
                    alt="action movie"
                  />
                </div>
                <div className="md:pl-[10%] grid content-center pt-[20%] hidden md:block">
                    <h2 className="font-semibold">Movie Moodboard</h2>
                    <hr></hr>
                    <h3 className="text-xl leading-10 pb-2"> A responsive front-end application to create movie and tv show recommendations based on user input.</h3>
                    <h4 className="text-lg leading-10 pb-5">Technologies: HTML, CSS, JS, TailwindCSS, third-party APIs</h4>
                    <div className="flex justify-around">
                    <a href="https://abbeydoyle.github.io/movie-moodboard/" target="_blank" className="text-black hover:text-[#725038] hover:underline">Deployed Application</a>
                    <a href="https://github.com/abbeydoyle/movie-moodboard " target="_blank" className="text-black hover:text-[#725038] hover:underline">Github Repository</a>
                    </div>
                </div>
                
              </div>
        
              <div className="md:pl-[20%] grid content-center md:hidden">
                    <h2 className="font-semibold">Movie Moodboard</h2>
                    <hr></hr>
                    <h3 className="text-xl leading-10 pb-2"> A responsive front-end application to create movie and tv show recommendations based on user input.</h3>
                    <h4 className="text-lg leading-10 pb-5">Technologies: HTML, CSS, JS, TailwindCSS, third-party APIs</h4>
                    <div className="flex justify-around">
                    <a href="https://abbeydoyle.github.io/movie-moodboard/" target="_blank" className="text-black hover:text-[#725038] hover:underline">Deployed Application</a>
                    <a href="https://github.com/abbeydoyle/movie-moodboard " target="_blank" className="text-black hover:text-[#725038] hover:underline">Github Repository</a>
                    </div>
                </div>
            </>
          );
}