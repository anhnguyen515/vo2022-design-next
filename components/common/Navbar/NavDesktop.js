import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
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
              color: "notification.main",
            },
          }}
        >
          <MoreVertIcon />
        </IconButton>
      </NavMenuDropdown>
    </Box>
  );
}
