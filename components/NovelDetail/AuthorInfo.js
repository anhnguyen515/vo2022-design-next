import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { numberFormat } from "utility/common";
import AbcIcon from "@mui/icons-material/Abc";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function AuthorInfo({ author }) {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "secondary.light",
          mb: 3,
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Avatar
          alt=""
          src={author.picture}
          sx={{ width: "8rem", height: "8rem" }}
        />
        <Typography variant="subtitle1" fontWeight={300}>
          Thông tin tác giả
        </Typography>
        <Typography variant="h6">{author.name}</Typography>
        <Typography>Cấp bậc: {author.ranking}</Typography>
        {/* author status */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AbcIcon fontSize="large" color="warning" />{" "}
            {numberFormat(author.num_words)}
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ThumbUpIcon fontSize="small" color="like" />{" "}
            {numberFormat(author.num_likes)}
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <VisibilityIcon fontSize="small" color="favorite" />{" "}
            {numberFormat(author.num_views)}
          </Typography>
        </Box>
        <Button variant="outlined" color="form" sx={{ mt: 2 }}>
          Ghé thăm tác giả
        </Button>
      </Paper>
    </>
  );
}
