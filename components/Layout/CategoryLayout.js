import { Box, Divider, Grid, Typography } from "@mui/material";
import CategoryTitle from "components/common/CategoryTitle";
import React from "react";

export default function CategoryLayout({ title, children }) {
  return (
    <Box>
      <CategoryTitle>{title}</CategoryTitle>
      <Box mt={3}>{children}</Box>
    </Box>
  );
}
