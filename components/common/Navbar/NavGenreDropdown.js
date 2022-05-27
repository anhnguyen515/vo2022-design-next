import { Box, Menu, MenuItem } from "@mui/material";
import * as React from "react";

export default function NavGenreDropdown({ children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {children}
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Thể loại 1</MenuItem>
        <MenuItem onClick={handleClose}>Thể loại 2</MenuItem>
        <MenuItem onClick={handleClose}>Thể loại 3</MenuItem>
        <MenuItem onClick={handleClose}>Thể loại 4</MenuItem>
      </Menu>
    </Box>
  );
}
