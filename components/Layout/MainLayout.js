import { Box, Container } from "@mui/material";
import HeadPage from "components/HeadPage";
import React from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar/Navbar";

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
        <Container sx={{ flex: 1 }} maxWidth="xl">
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
}
