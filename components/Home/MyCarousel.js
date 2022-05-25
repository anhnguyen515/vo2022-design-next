import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function MyCarousel({ works }) {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    arrows: false,
    speed: 1000,
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
