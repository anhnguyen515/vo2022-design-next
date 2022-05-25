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
import React from "react";

function FeaturedCard({ novel }) {
  return (
    <Card elevation={0} sx={{ borderRadius: 0 }}>
      <CardMedia
        component="img"
        image={novel.picture}
        alt="green iguana"
        sx={{
          borderRadius: 1,
          mb: 1,
        }}
      />
      <Typography gutterBottom variant="h6" fontSize="1rem" component="div">
        {novel.title}
      </Typography>
      <Typography
        variant="subtitle2"
        fontWeight="normal"
        color="text.secondary"
        gutterBottom
      >
        {novel.author.name}
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
                padding: 2,
                width: "100%",
                backgroundColor: "secondary.light",
              }}
            >
              <SyncCarousel novels={novels.slice(0, 3)} />
            </Paper>
          </Grid>
          <Grid container item xs={12} lg={8} spacing={2}>
            {novels.slice(3, 15).map((novel) => (
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
