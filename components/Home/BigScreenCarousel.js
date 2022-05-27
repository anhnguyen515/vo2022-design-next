import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import NovelCard from "components/common/NovelCard";
import Image from "next/image";
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
        <Grid item xs={4}>
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
          >
            {novels.map((novel) => (
              <Image
                key={novel.id}
                alt={`Ảnh bìa của ${novel.title}`}
                src={novel.picture}
                width={2}
                height={3}
                layout="responsive"
              />
            ))}
          </Slider>
        </Grid>
        <Grid item xs={8}>
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
              <Box key={novel.id}>
                <NovelCard novel={novel} />
              </Box>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Box>
  );
}
