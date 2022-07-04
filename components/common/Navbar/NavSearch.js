import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import React from "react";

export default function NavSearch() {
  return (
    <>
      <IconButton
        sx={{
          ml: 1,
          mr: 1,
          "&:hover": {
            color: "secondary.main",
          },
        }}
      >
        <SearchIcon />
      </IconButton>
    </>
  );
}
