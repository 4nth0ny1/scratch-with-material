import React from "react";
import Pagination from "@mui/material/Pagination";

export default function AppPagination({ setPage, page, pageNumbers }) {
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div>
      <Pagination
        onChange={(e) => handleChange(e.target.textContent)}
        count={pageNumbers}
        variant="outlined"
      />
    </div>
  );
}
