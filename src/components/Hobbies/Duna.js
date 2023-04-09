import React from "react";

export default function Duna({ setOpenDunaModal }) {
      return (
            <>
              <div className="fixed inset-0 z-50 overflow-y-auto">
                {/* exit modal when clicking outside of modal element */}
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-70"
                  onClick={() => setOpenDunaModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative w-full max-w-3xl p-4 mx-auto bg-[#e7ece4] rounded-md shadow-lg">
                    <button
                      type="button"
                      class="text-[#b18363] bg-transparent hover:bg-[#d2b7a4] hover:text-[#78543b] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center float-right"
                      data-modal-hide="defaultModal"
                      onClick={() => setOpenDunaModal(false)}
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
                          Duna
                        </h4>
                        <hr></hr>
                        <div className="float-left">
                          <p>I just went to the shelter to look at the puppies…that’s how it always goes, isn’t it? She was 2months old when I got her in January 2019. I named her Duna, which is Celtic for ‘little dark one’, fitting both for her looks and her attitude. I lucked out in the dog department – she’s a sweet girl who’s always just happy to be along for the ride. She’s equally as happy laying around with me as she is on our backpacking trips. She loves hiking, swimming, and playing with her friends at the dog park. I’m currently training her to run my next half marathon with me.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
}