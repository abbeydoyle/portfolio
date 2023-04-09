import React from "react";

export default function Reading({ setOpenReadingModal }) {
      return (
            <>
              <div className="fixed inset-0 z-50 overflow-y-auto">
                {/* exit modal when clicking outside of modal element */}
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-70"
                  onClick={() => setOpenReadingModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative w-full max-w-3xl p-4 mx-auto bg-[#e7ece4] rounded-md shadow-lg">
                    <button
                      type="button"
                      class="text-[#b18363] bg-transparent hover:bg-[#d2b7a4] hover:text-[#78543b] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center float-right"
                      data-modal-hide="defaultModal"
                      onClick={() => setOpenReadingModal(false)}
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                    <div className="mt-3 mb-4 sm:flex">
                      <div className="mt-2 sm:ml-[4rem] sm:text-left">
                        <h4 className="text-xl font-medium text-[#573d2b] text-center ">
                          Reading
                        </h4>
                        <hr></hr>
                        <div className="float-left">
                          <p>My grandmother is a librarian so I've always loved to read. My favorite genres are fantasy, horror, and scifi. If there was something trivial I could go back in time to change it would be recording every book I've read in Goodreads so I could have a running catalog. My favorite book is A Thousand Splendid Suns and my least favorite book is The Earthquake games. Before I go to used bookstores I pick out a row number in my head, then I have to pick a random book on that row (without looking) and read it. Unfortunately, that's how I stumbled upon The Earthquake games. Not my best RNG. Each year I keep track of the number of pages I've read and last year the count was 67,130.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
}