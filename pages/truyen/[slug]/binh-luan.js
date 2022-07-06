import { Box, Container, Typography } from "@mui/material";
import HeadPage from "components/common/HeadPage";
import Header from "components/NovelDetail/Header";
import NovelTabs from "components/NovelDetail/NovelTabs";
import React from "react";
import axiosClient from "utility/axiosConfig";

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const novel = await axiosClient.get(`novels/${slug}`).then((res) => res.data);

  return {
    props: {
      novel,
    },
  };
}

export default function CommentsPage({ novel }) {
  return (
    <>
      <HeadPage title={`Bình Luận Truyện ${novel.title} - Vietnovel Origin`} />
      {/* header */}
      <Box
        sx={{
          backgroundImage: `
              linear-gradient(to bottom, rgba(61, 61, 61, 0.7), rgba(61, 61, 61, 0.7)), 
              url(${novel.picture})
              `,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "text.light",
        }}
      >
        <Container maxWidth="2xl">
          <Box sx={{ padding: { xs: 1, md: 3 } }}>
            <Header novel={novel} />
          </Box>
        </Container>
      </Box>

      {/* body */}
      <Box>
        <Container maxWidth="2xl">
          <Box sx={{ padding: { xs: 1, md: 3 } }}>
            <NovelTabs novel={novel} value={"binh-luan"} />
            <br />
            <Typography variant="h1">Bình luận</Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
