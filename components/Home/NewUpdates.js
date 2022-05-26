import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CategoryLayout from "components/Layout/CategoryLayout";
import Link from "next/link";
import * as React from "react";

function NewUpdatesCard({ novel }) {
  return (
    <Card elevation={0} sx={{ display: "flex", borderRadius: 0, mb: 2 }}>
      <Box
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          mr: 1,
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
          <Link href={`/${novel.slug}`}>
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
          Chương 1 - 2 giờ trước
        </Typography>
      </Box>
      <Box sx={{ ml: "auto" }}>
        <Link href={`/${novel.slug}`}>
          <a>
            <CardMedia
              component="img"
              sx={{
                width: 50,
                borderRadius: 1,
              }}
              image={novel.picture}
              alt="Live from space album cover"
            />
          </a>
        </Link>
      </Box>
    </Card>
  );
}

export default function NewUpdates({ novels }) {
  return (
    <>
      <CategoryLayout title="Truyện Mới Cập Nhật">
        {novels.slice(0, 5).map((novel) => (
          <NewUpdatesCard key={novel.id} novel={novel} />
        ))}
      </CategoryLayout>
    </>
  );
}