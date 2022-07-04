import { Box, Button, Container } from "@mui/material";
import Header from "components/ChapterDetail/Header";
import ReadingSection from "components/ChapterDetail/ReadingSection";
import React, { useState } from "react";
import { getNovelChapter } from "utility/apis";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import InfoSection from "components/ChapterDetail/InfoSection";
import CustomBar from "components/ChapterDetail/CustomBar";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug, chap_num } = context.params;
  const chapter = await getNovelChapter(slug, chap_num);

  return {
    props: {
      chapter,
    },
    revalidate: 3600,
  };
}

export default function Chapter({ chapter }) {
  const [maxWidth, setMaxWidth] = useState(840);
  return (
    <>
      <Header chapter={chapter[0]} />
      <CustomBar chapter={chapter[0]} />
      <Container maxWidth="2xl">
        <Box sx={{ padding: { xs: 1, md: 3 } }}>
          <Box
            mb={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button variant="contained" startIcon={<NavigateBeforeIcon />}>
              Chương trước
            </Button>
            <Button variant="contained" endIcon={<NavigateNextIcon />}>
              Chương sau
            </Button>
          </Box>
          <ReadingSection chapter={chapter[0]} fontSize={18} maxWidth={840} />
          <Box
            mt={3}
            mb={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button variant="contained" startIcon={<NavigateBeforeIcon />}>
              Chương trước
            </Button>
            <Button variant="contained" endIcon={<NavigateNextIcon />}>
              Chương sau
            </Button>
          </Box>
          <Box>
            <InfoSection chapter={chapter[0]} />
          </Box>
        </Box>
      </Container>
    </>
  );
}
