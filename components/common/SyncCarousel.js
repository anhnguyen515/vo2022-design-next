import styled from "@emotion/styled";
import {
  Box,
  Card,
  CardMedia,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import parse from "html-react-parser";

export default function SyncCarousel({ novels }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    swipeToSlide: true,
    slidesToShow: 1,
    focusOnSelect: true,
    centerMode: true,
    // centerPadding: "5rem",
  };

  return (
    <>
      <Paper
        elevation={0}
        variant="outlined"
        sx={{
          width: {
            lg: "18rem",
            xs: "28rem",
          },
          display: "block",
          margin: "auto",
          backgroundColor: "background.default",
          padding: 2,
        }}
      >
        <Slider
          {...settings}
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
        >
          {novels.map((novel) => (
            <Box
              key={novel.id}
              sx={{
                padding: 1.5,
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Card>
                <CardMedia
                  component="img"
                  //   height="140"
                  image={novel.picture}
                  alt={`Ảnh bìa của ${novel.title}`}
                />
              </Card>
            </Box>
          ))}
        </Slider>
      </Paper>

      <Box mt={1}>
        <Slider
          arrows={false}
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
        >
          {novels.map((novel) => (
            <Box key={novel.id}>
              <Typography variant="h6" textAlign="center" gutterBottom>
                {novel.title}
              </Typography>
              <Typography textAlign="center" gutterBottom>
                {novel.primary_genre.name} · {novel.author.name}
              </Typography>
              <Box
                sx={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 7,
                  overflow: "hidden",
                  textOverflow: "ellipsis",

                  mt: 2,
                  color: "text.dark",
                  pl: 2,
                  pr: 2,
                }}
              >
                {parse(novel.summary)}
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
