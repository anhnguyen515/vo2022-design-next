import React from "react";
import { Box, IconButton, Paper } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function MyCarousel({ works }) {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          lg: "block",
        },
      }}
    >
      <Slider {...settings}>
        {works.slice(0, 5).map((work) => (
          <Box key={work.id}>
            <Image
              alt={`anh3 bìa của ${work.name}`}
              src={work.picture}
              width={3}
              height={2}
              layout="responsive"
              style={{ borderRadius: 5 }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
