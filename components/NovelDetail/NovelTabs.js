import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FlagIcon from "@mui/icons-material/Flag";
import { Avatar, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useRouter } from "next/router";
import * as React from "react";

export default function NovelTabs({ novel, value }) {
  const router = useRouter();
  const [currValue, setCurrValue] = React.useState(value);

  function handleChange(event, value) {
    setCurrValue(value);
    router.push(`/truyen/${novel.id}/${value}`);
  }

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
      <Tabs value={currValue} onChange={handleChange}>
        <Tab label="Giới thiệu" value={""} />
        <Tab label="Danh sách chương" value={"danh-sach-chuong"} />
        <Tab
          label={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography sx={{ fontSize: "0.9rem", fontWeight: 500 }}>
                Bình luận
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: 1,
                  color: "text.light",
                  pl: 0.5,
                  pr: 0.5,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                }}
              >
                21
              </Typography>
            </Box>
          }
          value={"binh-luan"}
        />

        <Tab
          label={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography sx={{ fontSize: "0.9rem", fontWeight: 500 }}>
                Đề cử
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: 1,
                  color: "text.light",
                  pl: 0.5,
                  pr: 0.5,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                }}
              >
                20
              </Typography>
            </Box>
          }
          value={"de-cu"}
        />
      </Tabs>
      <IconButton>
        <FlagIcon />
      </IconButton>
    </Box>
  );
}
