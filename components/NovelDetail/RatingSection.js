import { Box } from "@mui/material";
import UserRating from "components/common/UserRating";
import React from "react";

export default function RatingSection({ comment }) {
  return (
    <Box>
      <UserRating rating={comment} />
    </Box>
  );
}
