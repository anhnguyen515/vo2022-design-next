import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import NavAuth from "./NavAuth";
import NavLink from "./NavLink";
import NavMenuDropdown from "./NavMenuDropdown";
import NavSearch from "./NavSearch";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box
      sx={{
        ml: "auto",
        display: {
          xs: "block",
          lg: "none",
        },
      }}
    >
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} color="secondary">
            <MenuIcon />
          </IconButton>
          <Drawer
            PaperProps={{
              sx: {
                backgroundColor: "background.default",
                padding: 1,
              },
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box sx={{ minWidth: 200 }} role="presentation">
              <NavLink />
              <Divider
                sx={{
                  mr: 1,
                  ml: 1,
                  mt: 2,
                  mb: 2,
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <NavAuth />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <NavSearch />
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
              </Box>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
