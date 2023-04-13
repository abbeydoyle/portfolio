import React from "react";
import CV from "../assets/CV.pdf"
import { Transition } from '@headlessui/react'

export default function Resume({ setOpenResumeModal }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        {/* click off modal to exit */}
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-70"
          onClick={() => setOpenResumeModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="mt-3 mb-4 sm:flex">
              <div className="mt-2 text-center sm:ml-[4rem] sm:text-left">
                <h4 className="text-lg font-medium text-gray-800">
                  Would you like to download my resume?
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                  Feel free to use it as a format or pass it on!
                </p>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-white hover:bg-[#825c40] bg-[#624530] rounded-md outline-none ring-offset-2 ring-[#825c40] focus:ring-2"
                  >
                    <a href={CV} download="Abigail Doyle CV.pdf" className="text-white">Download</a>
                  </button>
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                    onClick={() => setOpenResumeModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
