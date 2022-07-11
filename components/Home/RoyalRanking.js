import { Box, Grid, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import RankingOrder from "components/common/RankingOrder";
import CategoryLayout from "components/Layout/CategoryLayout";
import Link from "next/link";
import * as React from "react";

function RoyalRankingCard({ novel, rank }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Paper
      elevation={0}
      variant="outlined"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        borderRadius: 1,
        padding: 2,
        position: "relative",
      }}
    >
      <Card elevation={0} sx={{ borderRadius: 0 }}>
        <Box sx={{ mb: 1, overflow: "hidden", borderRadius: 1 }}>
          <Link href={`/truyen/${novel.id}`} passHref>
            <CardMedia
              component="img"
              image={novel.picture}
              alt={`ảnh bìa của ${novel.title}`}
              sx={{
                borderRadius: 1,
                cursor: "pointer",
                transition: "all 0.2s",
                transform: hover ? "scale(1.12)" : "",
              }}
            />
          </Link>
        </Box>
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
          variant="h3"
          fontSize="1.2rem"
          fontWeight={700}
        >
          <Link href={`/truyen/${novel.id}`}>
            <a>{novel.title}</a>
          </Link>
        </Typography>
        <Typography
          color="text.secondary"
          fontWeight={500}
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
        <Typography fontSize=".9rem" textAlign="center" color="text.secondary">
          {novel.num_chapters} chương
        </Typography>
        <Box sx={{ position: "absolute", top: 4, left: 4 }}>
          <RankingOrder
            order={rank}
            width="3rem"
            height="3rem"
            rem={1.5}
            royalRanking={!hover}
          />
        </Box>
      </Card>
    </Paper>
  );
}

export default function RoyalRanking({ novels }) {
  return (
    <>
      <CategoryLayout title="Kim Bảng">
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
