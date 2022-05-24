import {
  Box,
  Card,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

function FeaturedCard({ work }) {
  return (
    <Card elevation={0} sx={{ borderRadius: 0 }}>
      <CardMedia
        component="img"
        image={work.picture}
        alt="green iguana"
        sx={{
          borderRadius: 1,
          mb: 1,
        }}
      />
      <Typography gutterBottom variant="h6" fontSize="1rem" component="div">
        {work.name}
      </Typography>
      <Typography
        variant="subtitle2"
        fontWeight="normal"
        color="text.secondary"
        gutterBottom
      >
        {work.writer.name}
      </Typography>
    </Card>
  );
}

export default function Featured({ works }) {
  return (
    <>
      <Box>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Truyện Nổi Bật
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "secondary.light",
              }}
            >
              Truyện nổi bật nhất nằm đây
            </Paper>
          </Grid>
          <Grid container item xs={12} md={8} spacing={2}>
            {works.slice(0, 12).map((work) => (
              <Grid key={work.id} item xs={6} md={3} lg={2}>
                <FeaturedCard work={work} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
