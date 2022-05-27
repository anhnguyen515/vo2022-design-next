import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

export default function MyCarousel({ novels }) {
  const settings = {
    dots: true,
    infinite: true,
    draggable: false,
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
          xl: "none",
        },
      }}
    >
      <Slider {...settings}>
        {novels.slice(0, 5).map((novel) => (
          <Link key={novel.id} href={`/${novel.slug}`}>
            <a>
              <Image
                alt={`Ảnh bìa của ${novel.title}`}
                src={novel.picture}
                width={10.5}
                height={7}
                layout="responsive"
                style={{ borderRadius: "0.5rem" }}
              />
            </a>
          </Link>
        ))}
      </Slider>
    </Box>
  );
}
