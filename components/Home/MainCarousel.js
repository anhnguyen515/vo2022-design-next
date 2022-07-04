import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        color: "text.light",
        position: "absolute",
        top: "45%",
        left: "0.25rem",
        zIndex: 100,
      }}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        color: "text.light",
        position: "absolute",
        top: "45%",
        right: "0.25rem",
        zIndex: 100,
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

export default function MyCarousel({ novels }) {
  const [showArrows, setShowArrows] = useState(false);
  const settings = {
    infinite: true,
    arrows: showArrows,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <Box
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
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
          <Link key={novel.id} href={`/truyen/${novel.id}`}>
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
