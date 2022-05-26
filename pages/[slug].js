import { Box, Container } from "@mui/material";
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
      <pre>{JSON.stringify(novel, null, 2)}</pre>
    </>
  );
  return (
    <>
      <Container maxWidth="2xl">
        <Box sx={{ padding: 3 }}>Đầu trang</Box>
        <Box sx={{ padding: 3 }}>Thân trang</Box>
      </Container>
    </>
  );
}
