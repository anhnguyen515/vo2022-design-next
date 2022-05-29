import { Avatar, Box, Divider, Grid, Paper, Typography } from "@mui/material";
import CategoryLayout from "components/Layout/CategoryLayout";
import Link from "next/link";
import React from "react";
import { numberFormat } from "utility/common";

function GenresCard({ genre, novels }) {
  return (
    <>
      <Paper elevation={0} variant="outlined">
        <Box sx={{ display: "flex", alignItems: "center", padding: 1 }}>
          <Avatar
            alt={`${genre.name}`}
            src={genre.svg_icon}
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
              ({genre.num_novels})
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Grid container spacing={2} sx={{ padding: 1 }}>
          {novels.slice(0, 5).map((novel) => (
            <Grid key={novel.id} item xs={12}>
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
                    <Link href={`/${novel.slug}`}>
                      <a>{novel.title}</a>
                    </Link>
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <Link href={`/tac-gia/${novel.author.slug}`}>
                      <a>{novel.author.name}</a>
                    </Link>
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  sx={{ ml: "auto" }}
                >
                  {numberFormat(novel.num_views)}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
}

export default function Genres({ genres, novels }) {
  return (
    <>
      <CategoryLayout title="Thể Loại Truyện">
        <Grid container spacing={3}>
          {genres.slice(0, 6).map((genre) => (
            <Grid key={genre.id} item xs={12} sm={6} md={4}>
              <GenresCard genre={genre} novels={novels} />
            </Grid>
          ))}
        </Grid>
      </CategoryLayout>
    </>
  );
}
