import { Avatar, Box, Divider, Grid, Paper, Typography } from "@mui/material";
import CategoryLayout from "components/Layout/CategoryLayout";
import React from "react";
import { viewsFormat } from "utility/common";

function GenresCard({ genre, works }) {
  return (
    <>
      <Paper elevation={0} variant="outlined">
        <Box sx={{ display: "flex", alignItems: "center", padding: 1 }}>
          <Avatar
            alt={`${genre.name}`}
            src={genre.picture}
            sx={{
              width: {
                xs: "1rem",
                md: "2rem",
              },
              height: {
                xs: "1rem",
                md: "2rem",
              },
            }}
          />
          <Box sx={{ ml: "auto" }}>
            <Typography fontWeight={500}>{genre.name}</Typography>
            <Typography variant="body2" textAlign="right">
              ({genre.num_works})
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Grid container spacing={2} sx={{ padding: 1 }}>
          {works.slice(0, 5).map((work) => (
            <Grid key={work.id} item xs={12}>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ overflow: "hidden", mr: 1 }}>
                  <Typography
                    fontWeight={500}
                    sx={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {work.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {work.writer.name}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  sx={{ ml: "auto" }}
                >
                  {viewsFormat(work.views)}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
}

export default function Genres({ genres, works }) {
  return (
    <>
      <CategoryLayout title="Thể Loại Truyện">
        <Grid container spacing={3}>
          {genres.slice(0, 6).map((genre) => (
            <Grid key={genre.id} item xs={6} md={4}>
              <GenresCard genre={genre} works={works} />
            </Grid>
          ))}
        </Grid>
      </CategoryLayout>
    </>
  );
}
