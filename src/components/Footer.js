// dependencies
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// export linkable footer
export default function FooterApp() {
  return (
    <footer>
      <div className="px-4 py-6 bg-transparent flex items-center justify-between">
        <span className="text-sm text-gray-500 text-center">
          © 2023{" "}
          <a
            className="text-sm text-gray-500 hover:text-gray-900"
            href="https://github.com/abbeydoyle/portfolio/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
          >
            Abigail Doyle
          </a>
          .
        </span>
        <div className="flex space-x-6 justify-center mt-0">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/abbeydoyle"
            className="text-gray-400 hover:text-gray-900"
          >
            <FaGithub />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/abigaildoyle3/"
            className="text-gray-400 hover:text-gray-900"
          >
            <FaLinkedin />
            <span className="sr-only">LinkedIn account</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
