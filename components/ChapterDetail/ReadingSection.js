import { Box, Paper } from "@mui/material";
import parse from "html-react-parser";

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
    <Box>
      <Box
        sx={{
          backgroundColor: backgroundColor,
          display: " flex",
          justifyContent: "center",
          transition: "all 0.5s",
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
            transition: "all 0.5s",
            "&>*": {
              mb: 3,
              "&:last-of-type": { mb: 0 },
            },
          }}
        >
          {parse(chapter.content_safe)}
        </Paper>
      </Box>
    </Box>
  );
}
