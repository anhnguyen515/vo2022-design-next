import { Avatar, Box, Container, IconButton, Typography } from "@mui/material";
import HeadPage from "components/common/HeadPage";
import Body from "components/NovelDetail/Body";
import Header from "components/NovelDetail/Header";
import NovelTabs from "components/NovelDetail/NovelTabs";
import React from "react";
import axiosClient from "utility/axiosConfig";
import FlagIcon from "@mui/icons-material/Flag";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
      <HeadPage title={`${novel[0].title} - Vietnovel Origin`} />
      {/* header */}
      <Box
        sx={{
          backgroundImage: `
              linear-gradient(to bottom, rgba(61, 61, 61, 0.7), rgba(61, 61, 61, 0.7)), 
              url(${novel[0].picture})
              `,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "text.light",
        }}
      >
        <Container maxWidth="2xl">
          <Box sx={{ padding: 3 }}>
            <Header novel={novel[0]} />
          </Box>
        </Container>
      </Box>

      {/* body */}
      <Box>
        <Container maxWidth="2xl">
          <Box sx={{ padding: 3 }}>
            <Body novel={novel[0]} />
          </Box>
        </Container>
      </Box>
    </>
  );
}
