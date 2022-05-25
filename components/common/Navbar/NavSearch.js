import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import React from "react";

export default function NavSearch() {
  return (
    <>
      <IconButton
        sx={{
          ml: 1,
          mr: 1,
          "&:hover": {
            color: "notification.main",
          },
        }}
      >
        <SearchIcon />
      </IconButton>
    </>
  );
}
