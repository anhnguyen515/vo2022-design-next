import { Box, Button, Container } from "@mui/material";
import Header from "components/ChapterDetail/Header";
import ReadingSection from "components/ChapterDetail/ReadingSection";
import React, { useEffect, useState } from "react";
import { getNovelChapter } from "utility/apis";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import InfoSection from "components/ChapterDetail/InfoSection";
import CustomBar from "components/ChapterDetail/CustomBar";
import { useRouter } from "next/router";

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
  const [backgroundColor, setBackgroundColor] = useState(
    "readingBackground.light"
  );
  const [paperColor, setPaperColor] = useState("readingPaper.light");
  const [font, setFont] = useState("Quicksand");
  const [fontColor, setFontColor] = useState("sub.dark");
  const [fontSize, setFontSize] = useState(18);

  function handleChangeWidth(event, newValue) {
    setMaxWidth(newValue);
    localStorage.setItem("max_width", JSON.stringify(newValue));
  }

  function handleChangeBackground(value) {
    setBackgroundColor(value);
    localStorage.setItem("bg_color", JSON.stringify(value));
  }

  function handleChangePaperColor(value) {
    setPaperColor(value);
    localStorage.setItem("paper_color", JSON.stringify(value));
  }

  function handleChangeFont(event) {
    setFont(event.target.value);
    localStorage.setItem("font", JSON.stringify(event.target.value));
  }

  function handleChangeFontColor(value) {
    setFontColor(value);
    localStorage.setItem("font_color", JSON.stringify(value));
  }

  function handleChangeFontSize(value) {
    setFontSize(value);
    localStorage.setItem("font_size", JSON.stringify(value));
  }

  useEffect(() => {
    const width = JSON.parse(localStorage.getItem("max_width"));
    const bgColor = JSON.parse(localStorage.getItem("bg_color"));
    const paperColor = JSON.parse(localStorage.getItem("paper_color"));
    const font = JSON.parse(localStorage.getItem("font"));
    const fontColor = JSON.parse(localStorage.getItem("font_color"));
    const fontSize = JSON.parse(localStorage.getItem("font_size"));

    if (width) setMaxWidth(width);
    if (bgColor) setBackgroundColor(bgColor);
    if (paperColor) setPaperColor(paperColor);
    if (font) setFont(font);
    if (fontColor) setFontColor(fontColor);
    if (fontSize) setFontSize(fontSize);
  }, []);

  return (
    <>
      <Header chapter={chapter[0]} />
      <CustomBar
        chapter={chapter[0]}
        backgroundColor={backgroundColor}
        paperColor={paperColor}
        maxWidth={maxWidth}
        font={font}
        fontSize={fontSize}
        handleChangeBackground={handleChangeBackground}
        handleChangePaperColor={handleChangePaperColor}
        handleChangeFont={handleChangeFont}
        handleChangeFontColor={handleChangeFontColor}
        handleChangeFontSize={handleChangeFontSize}
        handleChangeWidth={handleChangeWidth}
      />
      <Container maxWidth="2xl">
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
      </Container>
      <ReadingSection
        chapter={chapter[0]}
        font={font}
        fontSize={fontSize}
        backgroundColor={backgroundColor}
        paperColor={paperColor}
        fontColor={fontColor}
        maxWidth={maxWidth}
      />
      <Container maxWidth="2xl">
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
      </Container>
    </>
  );
}
