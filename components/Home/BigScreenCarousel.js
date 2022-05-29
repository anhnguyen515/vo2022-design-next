import { Box, Chip, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import { faQuoteLeft, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NovelCard from "components/common/NovelCard";

export default function BigScreenCarousel({ novels }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    focusOnSelect: true,
  };

  return (
    <Box
      sx={{
        display: {
          xs: "none",
          xl: "block",
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Slider
            // {...settings}
            draggable={false}
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
          >
            {novels.map((novel) => (
              <Link key={novel.id} href={`/${novel.slug}`}>
                <a>
                  <Image
                    alt={`Ảnh bìa của ${novel.title}`}
                    src={novel.picture}
                    width={2}
                    height={3}
                    layout="responsive"
                  />
                </a>
              </Link>
            ))}
          </Slider>
        </Grid>
        <Grid item xs={7}>
          <Slider
            {...settings}
            vertical={true}
            verticalSwiping={true}
            slidesToShow={3}
            dots={true}
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
          >
            {novels.map((novel) => (
              <Box key={novel.id} sx={{ minHeight: "10rem" }}>
                <NovelCard novel={novel} />
              </Box>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Box>
  );
}
