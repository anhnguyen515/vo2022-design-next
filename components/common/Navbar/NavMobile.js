import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Divider, Drawer, IconButton } from "@mui/material";
import * as React from "react";
import NavAuth from "./NavAuth";
import NavLink from "./NavLink";
import NavMenuDropdown from "./NavMenuDropdown";
import NavSearch from "./NavSearch";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

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
      <React.Fragment key={"right"}>
        <IconButton
          onClick={toggleDrawer("right", true)}
          color="sub"
          sx={{
            "&:hover": {
              color: "secondary.main",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "background.default",
              padding: 1,
            },
          }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          <Box sx={{ minWidth: 200 }} role="presentation">
            <NavLink />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <NavSearch />
              <NavMenuDropdown>
                <IconButton
                  sx={{
                    ml: 1,
                    "&:hover": {
                      color: "secondary.main",
                    },
                  }}
                >
                  <MoreVertIcon />
                </IconButton>
              </NavMenuDropdown>
            </Box>
            <Divider
              sx={{
                mr: 1,
                ml: 1,
                mt: 2,
                mb: 2,
              }}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <NavAuth />
            </Box>
          </Box>
        </Drawer>
      </React.Fragment>
    </Box>
  );
}
