import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CategoryLayout from "components/Layout/CategoryLayout";
import Link from "next/link";
import * as React from "react";
import { numberFormat } from "utility/common";

function MostReadCard({ novel }) {
  return (
    <Card elevation={0} sx={{ display: "flex", borderRadius: 0, mb: 2 }}>
      <Box>
        <Link href={`/truyen/${novel.slug}`}>
          <a>
            <CardMedia
              component="img"
              sx={{
                width: 50,
                borderRadius: 1,
                alignItems: "center",
                mr: 1,
              }}
              image={novel.picture}
              alt={`ảnh bìa của ${novel.title}`}
            />
          </a>
        </Link>
      </Box>
      <Box
        sx={{
          overflow: "hidden",
        }}
      >
        <Typography
          variant="body1"
          fontSize="0.9rem"
          fontWeight={500}
          gutterBottom
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <Link href={`/truyen/${novel.slug}`}>
            <a>{novel.title}</a>
          </Link>
        </Typography>
        <Typography
          variant="body2"
          fontSize="0.8rem"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <Link href={`/tac-gia/${novel.author.slug}`}>
            <a>{novel.author.name}</a>
          </Link>
        </Typography>
        <Typography variant="caption" color="text.dark" fontSize="0.8rem">
          {numberFormat(novel.num_views)} lượt xem - 3 năm trước
        </Typography>
      </Box>
    </Card>
  );
}

export default function MostRead({ novels }) {
  return (
    <>
      <CategoryLayout title="Truyện Đọc Nhiều">
        {novels.slice(0, 10).map((novel) => (
          <MostReadCard key={novel.id} novel={novel} />
        ))}
      </CategoryLayout>
    </>
  );
}
