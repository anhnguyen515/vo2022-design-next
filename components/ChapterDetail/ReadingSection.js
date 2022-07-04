import React from "react";
import parse from "html-react-parser";
import { Box, Container, Paper } from "@mui/material";

export default function ReadingSection({ chapter, fontSize, maxWidth }) {
  return (
    <Box sx={{ display: " flex", justifyContent: "center" }}>
      <Paper
        sx={{
          maxWidth: maxWidth,
          padding: 5,
          "&>*": { fontSize: fontSize, mb: 3 },
        }}
      >
        {parse(chapter.content_safe)}
      </Paper>
    </Box>
  );
}
