import { Box, Paper, Typography } from "@mui/material";
import CategoryLayout from "components/Layout/CategoryLayout";
import React from "react";
import { viewsFormat } from "utility/common";

function TopWritersCard({ writer, rank }) {
  return (
    <>
      <Box key={writer.id} sx={{ display: "flex", gap: 1, mb: 1 }}>
        <Box>
          <Typography
            sx={{
              borderRadius: "50%",
              backgroundColor: "form.main",
              width: "2rem",
              height: "2rem",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "text.light",
            }}
          >
            {rank}
          </Typography>
        </Box>
        <Box
          sx={{
            overflow: "hidden",
            textOverflow: "ellipse",
            whiteSpace: "nowrap",
          }}
        >
          <Typography
            fontSize="1.1rem"
            fontWeight={500}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipse",
              whiteSpace: "nowrap",
            }}
          >
            {writer.name}
          </Typography>
          <Typography variant="body2">{writer.title}</Typography>
          <Typography variant="caption" color="text.dark" fontSize="0.7rem">
            {viewsFormat(writer.views)} lượt xem -{" "}
            {viewsFormat(writer.total_words)} chữ - {writer.num_works} truyện
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default function TopWriters({ writers }) {
  return (
    <>
      <CategoryLayout title="Tác Giả Bảng">
        {writers.slice(0, 10).map((writer, index) => (
          <TopWritersCard key={writer.id} writer={writer} rank={index + 1} />
        ))}
      </CategoryLayout>
    </>
  );
}
