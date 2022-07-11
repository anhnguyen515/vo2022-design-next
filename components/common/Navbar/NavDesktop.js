import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";
import * as React from "react";
import NavAuth from "./NavAuth";
import NavLink from "./NavLink";
import NavMenuDropdown from "./NavMenuDropdown";
import NavSearch from "./NavSearch";

export default function NavDesktop() {
  return (
    <Box
      sx={{
        ml: "auto",
        display: {
          xs: "none",
          lg: "flex",
        },
      }}
    >
      <NavLink />
      <NavSearch />
      <NavAuth />
      <NavMenuDropdown>
        <IconButton
          sx={{
            ml: 1,
            "&:hover": {
              color: "secondary.main",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </NavMenuDropdown>
    </Box>
  );
}
