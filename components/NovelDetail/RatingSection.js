import { Box } from "@mui/material";
import Comment from "components/common/Comment";
import React from "react";

export default function RatingSection({ comment }) {
  return (
    <Box>
      <Comment comment={comment} isRating />
    </Box>
  );
}
