import { Badge, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavGenreDropdown from "./NavGenreDropdown";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: "0.5rem",
    fontSize: "0.8rem",
  },
}));

export default function NavLink() {
  const router = useRouter();

  const generalStyle = {
    fontSize: "1rem",
    borderRadius: 1,
    fontWeight: 500,
    "&:hover": {
      color: "notification.dark",
    },
  };

  const activeStyle = {
    ...generalStyle,
    border: 1,
    borderColor: "notification.main",
    color: "notification.main",
  };

  const linkStyle = {
    display: "block",
    color: "inherit",
    cursor: "pointer",
    padding: "0.4rem 0.7rem",
    textDecoration: "none",
    width: "100%",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          lg: "row",
          xs: "column",
        },
        gap: 1,
        alignItems: {
          lg: "center",
        },
        ml: "auto",
      }}
    >
      <Typography
        variant="h6"
        sx={
          router.asPath.includes("/royal-ranking") ? activeStyle : generalStyle
        }
      >
        <Link href="/royal-ranking">
          <a style={linkStyle}>Royal Ranking</a>
        </Link>
      </Typography>

      <Typography
        variant="h6"
        sx={
          router.asPath.includes("/truyen-sang-tac-moi-ra-mat")
            ? activeStyle
            : generalStyle
        }
      >
        <StyledBadge badgeContent={100} color="notification">
          <Link href="/truyen-sang-tac-moi-ra-mat">
            <a style={linkStyle}>Truyện mới</a>
          </Link>
        </StyledBadge>
      </Typography>

      <NavGenreDropdown>
        <Typography
          variant="h6"
          sx={router.asPath.includes("/the-loai") ? activeStyle : generalStyle}
        >
          <span
            style={{
              ...linkStyle,
              display: "flex",
              alignItems: "center",
            }}
          >
            Thể loại <ArrowDropDownIcon />
          </span>
        </Typography>
      </NavGenreDropdown>
      <Typography
        variant="h6"
        sx={router.asPath.includes("/forum") ? activeStyle : generalStyle}
      >
        <StyledBadge badgeContent={1} color="notification">
          <Link href="/forum">
            <a style={linkStyle}>Diễn đàn</a>
          </Link>
        </StyledBadge>
      </Typography>
      <Typography
        variant="h6"
        sx={router.asPath.includes("/support") ? activeStyle : generalStyle}
      >
        <Link href="/support">
          <a style={linkStyle}>Hỗ trợ</a>
        </Link>
      </Typography>
    </Box>
  );
}