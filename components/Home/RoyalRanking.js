import { Divider, Grid, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CategoryLayout from "components/Layout/CategoryLayout";
import * as React from "react";

function RoyalRankingCard({ novel }) {
  return (
    <Paper elevation={0} variant="outlined" sx={{ padding: 2 }}>
      <Card elevation={0} sx={{ borderRadius: 0 }}>
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
          fontSize="1rem"
          component="div"
        >
          {novel.title}
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
          {novel.author.name}
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign="center"
          color="text.secondary"
        >
          {novel.num_chapters} chương
        </Typography>
      </Card>
    </Paper>
  );
}

export default function RoyalRanking({ novels }) {
  return (
    <>
      <CategoryLayout title="Royal Ranking - Bảng Xếp Hạng Truyện Chữ Hay Trong Tháng">
        <Grid container spacing={2}>
          {novels.slice(0, 5).map((novel) => (
            <Grid item key={novel.id} xs={12} sm={6} md={4} lg={2.4}>
              <RoyalRankingCard novel={novel} />
            </Grid>
          ))}
        </Grid>
      </CategoryLayout>
    </>
  );
}
