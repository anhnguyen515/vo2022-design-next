import { Box, Container } from "@mui/material";
import Footer from "components/common/Footer";
import Navbar from "components/common/Navbar/Navbar";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "200vh",
        }}
      >
        <Navbar />
        <Container sx={{ flex: 1 }} maxWidth="2xl">
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
}
