// dependencies
import React from "react";
import { Footer } from "flowbite-react";

// export linkable footer
export default function Footer() {
  return (
    <Footer container={true} className="flex justify-center">
      <Footer.Copyright
        href="https://github.com/abbeydoyle/portfolio/blob/main/LICENSE"
        by="Abigail Doyle"
        year={2023}
      />
    </Footer>
  );
}