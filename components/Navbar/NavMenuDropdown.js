import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Divider, ListItemIcon, ListItemText } from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FacebookIcon from "@mui/icons-material/Facebook";
import GroupIcon from "@mui/icons-material/Group";
import ModeIcon from "@mui/icons-material/Mode";
import StarIcon from "@mui/icons-material/Star";

export default function NavMenuDropdown({ children }) {
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FeedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Vietnovel Origin Blog</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <TabletMacIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Tải App Sáng Tác Truyện</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <HelpOutlineOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cộng Đồng Hỏi Đáp</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Bài Viết Hướng Dẫn</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FacebookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Fanpage Vietnovel Origin</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <GroupIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Group Tinh Hội</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ModeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Danh Sách Tác Giả</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <StarIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Danh Sách Đề Cử</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}
