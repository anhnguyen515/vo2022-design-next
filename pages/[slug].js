import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import axiosClient from "utility/axiosConfig";

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const novel = await axiosClient
    .get(`novels?slug=${slug}`)
    .then((res) => res.data);

  return {
    props: {
      novel,
    },
  };
}

export default function NovelDetail({ novel }) {
  return (
    <>
      <Box sx={{ backgroundColor: "secondary.light" }}>
        <Container maxWidth="2xl">
          <Box sx={{ padding: 3 }}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={3} xl={2}>
                <Image
                  alt={`ảnh bìa của ${novel[0].title}`}
                  src={novel[0].picture}
                  width={2}
                  height={3}
                  layout="responsive"
                />
              </Grid>
              <Grid item xs={12} md={9} xl={10}>
                <Typography variant="h4">Truyện {novel[0].title}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="2xl">
          <Box sx={{ padding: 3 }}>{novel[0].title}</Box>
        </Container>
      </Box>
    </>
  );
}
