import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      // className="slick-arrow"
      onClick={onClick}
      color="text"
      sx={{
        position: "absolute",
        top: {
          xs: "27%",
          lg: "25%",
        },
        left: "1rem",
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
      // className="slick-arrow"
      onClick={onClick}
      color="text"
      sx={{
        position: "absolute",
        top: {
          xs: "27%",
          lg: "25%",
        },
        right: "1rem",
        zIndex: 100,
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

export default function FeaturedCarousel({ novels }) {
  const settings = {
    infinite: true,
    // arrows: false,
    // dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <Box>
        <Slider {...settings}>
          {novels.map((novel) => (
            <Box key={novel.id}>
              {/* picture container */}
              <Box
                sx={{
                  backgroundImage: `
              linear-gradient(to bottom, rgba(31, 31, 31, 0.7), rgba(31, 31, 31, 0.7)), 
              url(${novel.picture})
              `,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: 0,
                  pt: 3,
                  pb: 3,
                }}
              >
                <Link href={`/truyen/${novel.id}`} passHref>
                  <Box
                    sx={{
                      border: 1,
                      position: "relative",
                      borderColor: "text.light",
                      cursor: "pointer",
                      margin: "auto",
                      width: {
                        xs: "15rem",
                        lg: "10rem",
                      },
                      height: {
                        xs: "22.5rem",
                        lg: "15rem",
                      },
                    }}
                  >
                    <Image
                      alt={`Ảnh bìa của ${novel.title}`}
                      src={novel.picture}
                      layout="fill"
                      // style={{ borderRadius: "0.25rem" }}
                    />
                  </Box>
                </Link>
              </Box>
              {/* contents container */}
              <Box mt={1}>
                <Typography
                  variant="h3"
                  fontSize="1.5rem"
                  fontWeight={700}
                  textAlign="center"
                >
                  <Link href={`/truyen/${novel.id}`}>
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
                    WebkitLineClamp: 5,
                    overflow: "hidden",
                    textOverflow: "ellipsis",

                    mt: 2,
                    mb: 2,
                    color: "text.dark",
                    pl: 2,
                    pr: 2,
                  }}
                >
                  {novel.summary}
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
