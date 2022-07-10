import { Card, CardMedia, Grid, Paper, Typography } from "@mui/material";
import Carousel from "components/common/Carousel";
import CategoryLayout from "components/Layout/CategoryLayout";
import Link from "next/link";
import React from "react";

function FeaturedCard({ novel }) {
  return (
    <Card elevation={0} sx={{ borderRadius: 3 }}>
      <Link href={`/truyen/${novel.id}`}>
        <a>
          <CardMedia
            component="img"
            image={novel.picture}
            alt="green iguana"
            sx={{
              borderRadius: 3,
              mb: 1,
            }}
          />
        </a>
      </Link>
      <Typography
        gutterBottom
        variant="h3"
        fontSize="1.2rem"
        fontWeight={700}
        sx={{ lineHeight: "1.2rem" }}
      >
        <Link href={`/truyen/${novel.id}`}>
          <a>{novel.title}</a>
        </Link>
      </Typography>
      <Typography
        color="text.secondary"
        fontWeight={500}
        gutterBottom
        sx={{ lineHeight: "1.1rem" }}
      >
        <Link href={`/tac-gia/${novel.author.slug}`}>
          <a>{novel.author.name}</a>
        </Link>
      </Typography>
    </Card>
  );
}

export default function Featured({ novels }) {
  return (
    <>
      <CategoryLayout title="Truyện Nổi Bật">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "sub.light",
              }}
            >
              <Carousel novels={novels.slice(0, 12)} />
            </Paper>
          </Grid>
          <Grid container item xs={12} lg={8} spacing={3}>
            {novels.slice(0, 12).map((novel) => (
              <Grid key={novel.id} item xs={6} sm={4} md={2}>
                <FeaturedCard novel={novel} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </CategoryLayout>
    </>
  );
}
