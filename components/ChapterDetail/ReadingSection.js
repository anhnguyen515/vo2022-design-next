import React from "react";
import parse from "html-react-parser";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";

export default function ReadingSection({
  chapter,
  font,
  fontSize,
  backgroundColor,
  paperColor,
  fontColor,
  maxWidth,
}) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Box
        sx={{
          backgroundColor: backgroundColor,
          display: " flex",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            backgroundColor: paperColor,
            maxWidth: maxWidth,
            padding: 5,
            mt: 5,
            mb: 5,
            color: fontColor,
            fontFamily: font,
            fontSize: fontSize,
            "&>*": {
              mb: 3,
            },
          }}
        >
          {parse(chapter.content_safe)}
        </Paper>
      </Box>
    </>
  );
}
