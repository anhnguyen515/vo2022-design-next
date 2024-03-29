import { Box } from "@mui/material";
import Footer from "components/common/Footer";
import Navbar from "components/common/Navbar/Navbar";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </Box>
    </>
  );
}
