import {
  Box,
  Card,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import SyncCarousel from "components/common/SyncCarousel";
import CategoryLayout from "components/Layout/CategoryLayout";
import Link from "next/link";
import React from "react";

function FeaturedCard({ novel }) {
  return (
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
            }}
          />
        </a>
      </Link>
      <Typography gutterBottom variant="h6" fontSize="1rem" component="div">
        <Link href={`/${novel.slug}`}>
          <a>{novel.title}</a>
        </Link>
      </Typography>
      <Typography
        variant="subtitle2"
        fontWeight="normal"
        color="text.secondary"
        gutterBottom
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
                width: "100%",
                backgroundColor: "secondary.light",
              }}
            >
              <SyncCarousel novels={novels.slice(0, 12)} />
            </Paper>
          </Grid>
          <Grid container item xs={12} lg={8} spacing={3}>
            {novels.slice(0, 12).map((novel) => (
              <Grid key={novel.id} item xs={6} sm={4} md={3} lg={2}>
                <FeaturedCard novel={novel} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </CategoryLayout>
    </>
  );
}
