import { Box, Paper, Typography } from "@mui/material";
import RankingOrder from "components/common/RankingOrder";
import CategoryLayout from "components/Layout/CategoryLayout";
import Link from "next/link";
import React from "react";
import { numberFormat } from "utility/utils";

function TopWritersCard({ author, rank }) {
  return (
    <>
      <Box
        key={author.id}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 1,
          p: 1,
          "&:hover": { backgroundColor: "primary.light" },
        }}
      >
        <Box>
          <RankingOrder order={rank} width="2.5rem" height="2.5rem" rem={1.2} />
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
            fontWeight={600}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipse",
              whiteSpace: "nowrap",
            }}
          >
            <Link href={`/tac-gia/${author.slug}`}>
              <a>{author.name}</a>
            </Link>
          </Typography>
          <Typography variant="body2">{author.ranking}</Typography>
          <Typography variant="caption" color="text.dark" fontSize="0.7rem">
            {numberFormat(author.num_views)} lượt xem -{" "}
            {numberFormat(author.num_words)} chữ - {author.num_novels} truyện
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
