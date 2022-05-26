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
      sx={{ padding: 2, position: "relative" }}
    >
      <Card elevation={0} sx={{ borderRadius: 0 }}>
        <Link href={`/${novel.slug}`}>
          <a>
            <CardMedia
              component="img"
              image={novel.picture}
              alt="green iguana"
              sx={{
                borderRadius: 1,
                mb: 1,
                height: {
                  xs: 200,
                  sm: "",
                },
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
        >
          <Link href={`/${novel.slug}`}>
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
          <Link href={`/${novel.author.slug}`}>
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
            <Grid item key={novel.id} xs={12} sm={6} md={4} lg={2}>
              <RoyalRankingCard novel={novel} rank={index + 1} />
            </Grid>
          ))}
        </Grid>
      </CategoryLayout>
    </>
  );
}
