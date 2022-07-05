import { Box, Grid, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import RankingOrder from "components/common/RankingOrder";
import CategoryLayout from "components/Layout/CategoryLayout";
import Link from "next/link";
import * as React from "react";

function RoyalRankingCard({ novel, rank }) {
  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{
        borderRadius: 3,
        padding: 2,
        position: "relative",
        transition: "all 0.2s",
        "&:hover": {
          transform: "scale(1.06)",
        },
      }}
    >
      <Card elevation={0} sx={{ borderRadius: 0 }}>
        <Link href={`/truyen/${novel.id}`}>
          <a>
            <CardMedia
              component="img"
              image={novel.picture}
              alt={`ảnh bìa của ${novel.title}`}
              sx={{
                borderRadius: 3,
                mb: 1,

                // height: {
                //   xs: 200,
                //   sm: "",
                // },
              }}
            />
          </a>
        </Link>
        <Typography
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "1.5rem",
            minHeight: "3rem",
          }}
          gutterBottom
          variant="h6"
          fontSize="1.2rem"
          fontWeight={700}
        >
          <Link href={`/truyen/${novel.id}`}>
            <a>{novel.title}</a>
          </Link>
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
          gutterBottom
        >
          <Link href={`/tac-gia/${novel.author.slug}`}>
            <a>{novel.author.name}</a>
          </Link>
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign="center"
          color="text.secondary"
        >
          {novel.num_chapters} chương
        </Typography>
        <Box sx={{ position: "absolute", top: 4, left: 4 }}>
          <RankingOrder
            order={rank}
            width="3rem"
            height="3rem"
            rem={1.5}
            royalRanking
          />
        </Box>
      </Card>
    </Paper>
  );
}

export default function RoyalRanking({ novels }) {
  return (
    <>
      <CategoryLayout title="Royal Ranking">
        <Grid container spacing={3}>
          {novels.slice(0, 6).map((novel, index) => (
            <Grid item key={novel.id} xs={6} sm={4} lg={2}>
              <RoyalRankingCard novel={novel} rank={index + 1} />
            </Grid>
          ))}
        </Grid>
      </CategoryLayout>
    </>
  );
}
