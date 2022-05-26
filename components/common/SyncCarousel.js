import { Box, Card, CardMedia, Typography } from "@mui/material";
import parse from "html-react-parser";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";

export default function SyncCarousel({ novels }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    swipeToSlide: true,
    slidesToShow: 3,
    focusOnSelect: true,
    centerMode: true,
    // centerPadding: "5rem",
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "form.light",
          borderRadius: "0.25rem 0.25rem 0 0",
          pt: 2,
          pb: 2,
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
                padding: 2,
                pl: {
                  xs: 1.5,
                  md: 3,
                  lg: 1.5,
                  "2xl": 3,
                },
                pr: {
                  xs: 1.5,
                  md: 3,
                  lg: 1.5,
                  "2xl": 3,
                },
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Card>
                <CardMedia
                  component="img"
                  // height="140"
                  image={novel.picture}
                  alt={`Ảnh bìa của ${novel.title}`}
                />
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>

      <Box mt={1}>
        <Slider
          arrows={false}
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
        >
          {novels.map((novel) => (
            <Box key={novel.id}>
              <Typography variant="h6" textAlign="center" gutterBottom>
                <Link href={`/${novel.slug}`}>
                  <a>{novel.title}</a>
                </Link>
              </Typography>
              <Typography textAlign="center" gutterBottom>
                <Link href={`/the-loai/${novel.primary_genre.slug}`}>
                  <a style={{ opacity: "0.6" }}>{novel.primary_genre.name}</a>
                </Link>{" "}
                ·{" "}
                <Link href={`/tac-gia/${novel.author.slug}`}>
                  <a>{novel.author.name}</a>
                </Link>
              </Typography>
              <Box
                sx={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 7,
                  overflow: "hidden",
                  textOverflow: "ellipsis",

                  mt: 2,
                  mb: 2,
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
