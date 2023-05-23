import React, { useState } from "react";
import { PaginationItem, Box, Stack } from "@mui/material";
import CDC from "../components/CareerPages/CDC";
import Boeing from "../components/CareerPages/Boeing";
import Sanofi from "../components/CareerPages/Sanofi";
import ORISE from "../components/CareerPages/ORISE";
import UTCRA from "../components/CareerPages/UTCRA";
import UTCT from "../components/CareerPages/UTCT";
import TupeloHoney from "../components/CareerPages/TupeloHoney";
import TopSVG from "../components/TopSVG";
import BottomSVG from "../components/BottomSVG";

const components = [Boeing, CDC, Sanofi, ORISE, UTCRA, UTCT, TupeloHoney];

function Career() {
  const [currentPage, setCurrentPage] = useState(1);
  const Component = components[currentPage - 1];

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <TopSVG />

      <h1 className="pt-5 font-bold md:pb-8" id="otherPage">
        Career History
        <hr className="w-[130%] -translate-x-10"></hr>
      </h1>
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: "98%" }}>
          <Component />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: '5%',
            alignItems: "center",
            gap: 1,
            position: 'fixed', /* Changed from 'fixed' to 'sticky' */
            top: '40%',
            right: 3
          }}
        >
          {components.map((_, index) => (
            <PaginationItem
              key={index}
              page={index + 1}
              selected={currentPage === index + 1}
              onClick={() => handlePageChange(null, index + 1)}
              variant="outlined"
              color="primary"
            />
          ))}
        </Box>
      </Stack>
      <BottomSVG />
    </>
  );
}

export default Career;