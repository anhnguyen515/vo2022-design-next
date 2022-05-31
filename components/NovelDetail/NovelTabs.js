import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FlagIcon from "@mui/icons-material/Flag";
import { Avatar, Badge, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Link from "next/link";
import * as React from "react";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: "0.3rem",
    top: "0.75rem",
  },
}));

export default function NovelTabs({ novel, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",

        backgroundColor: "background.default",
        border: 1,
        borderColor: "form.light",
        pt: 1,
        pb: 1,
        pl: 2,
        pr: 2,
        position: "sticky",
        top: 70,
        zIndex: 900,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar
          alt=""
          src={novel.author.picture}
          sx={{ width: "3.5rem", height: "3.5rem" }}
        />
        <Typography
          variant="h6"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          {novel.author.name}{" "}
          {novel.author.verified && (
            <CheckCircleIcon color="success" fontSize="small" />
          )}
        </Typography>
      </Box>
      <Tabs
        value={value}
        indicatorColor="primary"
        // variant="scrollable"
        // scrollButtons="auto"
        // allowScrollButtonsMobile
      >
        <Link href={`/truyen/${novel.slug}`} passHref>
          <Tab
            label="Giới thiệu"
            sx={{ color: value === 0 ? "primary.main" : "" }}
          />
        </Link>
        <Link href={`/truyen/${novel.slug}/binh-luan`} passHref>
          <StyledBadge badgeContent={21} color="primary">
            <Tab
              label="Bình Luận"
              sx={{ color: value === 1 ? "primary.main" : "" }}
            />
          </StyledBadge>
        </Link>
        <Link href={`/truyen/${novel.slug}/de-cu`} passHref>
          <StyledBadge badgeContent={20} color="primary">
            <Tab
              label="Đề Cử"
              sx={{ color: value === 2 ? "primary.main" : "" }}
            />
          </StyledBadge>
        </Link>
        <Link href={`/truyen/${novel.slug}/danh-sach-chuong`} passHref>
          <Tab
            label="Danh Sách Chương"
            sx={{ color: value === 3 ? "primary.main" : "" }}
          />
        </Link>
      </Tabs>
      <IconButton>
        <FlagIcon />
      </IconButton>
    </Box>
  );
}
