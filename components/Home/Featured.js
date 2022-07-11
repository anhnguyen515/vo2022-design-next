import { Box, Card, CardMedia, Grid, Paper, Typography } from "@mui/material";
import Carousel from "components/common/Carousel";
import CategoryLayout from "components/Layout/CategoryLayout";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function FeaturedCard({ novel }) {
  return (
    <Card elevation={0} sx={{ borderRadius: 1 }}>
      <Box
        sx={{
          mb: 1,
          overflow: "hidden",
          borderRadius: 1,
        }}
      >
        <Link href={`/truyen/${novel.id}`} passHref>
          <Box
            component={motion.div}
            whileHover={{ scale: 1.12, cursor: "pointer" }}
          >
            <CardMedia
              component="img"
              image={novel.picture}
              alt={novel.title}
              sx={{
                borderRadius: 1,
                overflow: "hidden",
              }}
            />
          </Box>
        </Link>
      </Box>
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
            <Box
              sx={{
                backgroundColor: "text.light",
                borderRadius: 1,
              }}
            >
              <Carousel novels={novels.slice(0, 12)} />
            </Box>
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
