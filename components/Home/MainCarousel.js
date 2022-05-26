import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

export default function MyCarousel({ novels }) {
  const settings = {
    dots: true,
    infinite: true,
    // fade: true,
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
        {novels.slice(0, 5).map((novel) => (
          <Link key={novel.id} href={`/${novel.slug}`} passHref>
            <Box
              sx={{
                position: "relative",
                height: "28vw",
                cursor: "pointer",
              }}
            >
              <Image
                alt={`Ảnh bìa của ${novel.title}`}
                src={novel.picture}
                layout="fill"
                style={{ borderRadius: "0.5rem", cursor: "pointer" }}
              />
            </Box>
          </Link>
        ))}
      </Slider>
    </Box>
  );
}
