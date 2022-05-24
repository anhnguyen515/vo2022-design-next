import { Divider, Grid, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

function RoyalRankingCard({ work }) {
  return (
    <Paper elevation={0} variant="outlined" sx={{ padding: 2 }}>
      <Card elevation={0} sx={{ borderRadius: 0 }}>
        <CardMedia
          component="img"
          image={work.picture}
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
          {work.name}
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
          {work.writer.name}
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign="center"
          color="text.secondary"
        >
          {work.chapters} chương
        </Typography>
      </Card>
    </Paper>
  );
}

export default function RoyalRanking({ works }) {
  return (
    <>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Royal Ranking - Bảng Xếp Hạng Truyện Chữ Hay Trong Tháng
      </Typography>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Grid container spacing={2}>
        {works.slice(0, 5).map((work) => (
          <Grid item key={work.id} xs={12} sm={6} md={4} lg={2.4}>
            <RoyalRankingCard work={work} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
