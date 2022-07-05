import React from "react";
import parse from "html-react-parser";
import { Box, Container, Paper } from "@mui/material";

export default function ReadingSection({
  chapter,
  font,
  fontSize,
  backgroundColor,
  paperColor,
  fontColor,
  maxWidth,
}) {
  return (
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
  );
}
