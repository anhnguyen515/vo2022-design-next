import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

export default function CategoryLayout({ title, children }) {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Divider sx={{ mt: 2, mb: 2 }} />
      {children}
    </Box>
  );
}
