import React from "react";

// modal to appear when item as been added to cart
export default function SanofiAlert({ setOpenSanofiModal }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        {/* exit modal when clicking outside of modal element */}
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-70"
          onClick={() => setOpenSanofiModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-3xl p-4 mx-auto bg-[#e7ece4] rounded-md shadow-lg">
            <button
              type="button"
              class="text-[#b18363] bg-transparent hover:bg-[#d2b7a4] hover:text-[#78543b] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center float-right"
              data-modal-hide="defaultModal"
              onClick={() => setOpenSanofiModal(false)}
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
                  Job Roles:
                </h4>
                <hr></hr>
                <div className="float-left">
                  <p>
                  + Maintained strict product development timelines to meet
                consumer product release dates
                  </p>
                  <p>
                    + Trained to validate new manufacturing and packaging processes,
                write protocols, and design cleaning procedures
                  </p>
                  <p>
                  + Conducted weekly DI water testing to insure contaminated water
                does not come in contact with industry processes while
                generating manufacturing reports
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}