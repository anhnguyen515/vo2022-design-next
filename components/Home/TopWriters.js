import { Box, Paper, Typography } from "@mui/material";
import RankingOrder from "components/common/RankingOrder";
import CategoryLayout from "components/Layout/CategoryLayout";
import React from "react";
import { viewsFormat } from "utility/common";

function TopWritersCard({ author, rank }) {
  return (
    <>
      <Box key={author.id} sx={{ display: "flex", gap: 1, mb: 1 }}>
        <Box>
          <RankingOrder
            order={rank}
            width="2.5rem"
            height="2.5rem"
            crownWidth={24}
          />
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
            {author.name}
          </Typography>
          <Typography variant="body2">{author.ranking}</Typography>
          <Typography variant="caption" color="text.dark" fontSize="0.7rem">
            {viewsFormat(author.views)} lượt xem -{" "}
            {viewsFormat(author.total_words)} chữ - {author.num_novels} truyện
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default function TopWriters({ authors }) {
  return (
    <>
      <CategoryLayout title="Tác Giả Bảng">
        {authors.slice(0, 10).map((author, index) => (
          <TopWritersCard key={author.id} author={author} rank={index + 1} />
        ))}
      </CategoryLayout>
    </>
  );
}
