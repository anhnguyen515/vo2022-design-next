import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Chip, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { numberFormat } from "utility/utils";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      // className="slick-arrow"
      onClick={onClick}
      color="text"
      sx={{
        position: "absolute",
        top: "45%",
        left: 0,
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
        top: "45%",
        right: 0,
        zIndex: 100,
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

export default function BigScreenCarousel({ novels }) {
  const novelStatusGrid = {
    name: {
      item: true,
      xs: 4,
    },
    info: {
      item: true,
      xs: 8,
    },
  };

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <Box
        sx={{
          display: {
            xs: "none",
            xl: "block",
          },
        }}
      >
        <Slider {...settings}>
          {novels.map((novel) => (
            <Box
              key={novel.id}
              sx={{
                backgroundImage: `
              linear-gradient(to bottom, rgba(21, 21, 21, 0.7), rgba(21, 21, 21, 1)), 
              url(${novel.picture})
              `,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: 1,
                pt: 3,
                pb: 3,
                display: "flex !important",
              }}
            >
              <Box sx={{ ml: "2.5rem" }}>
                <Link href={`/truyen/${novel.id}`} passHref>
                  <Box
                    sx={{
                      border: 1,
                      position: "relative",
                      borderColor: "text.main",
                      cursor: "pointer",
                      width: "12rem",
                      height: "18rem",
                    }}
                  >
                    <Image
                      alt={`Ảnh bìa của ${novel.title}`}
                      src={novel.picture}
                      layout="fill"
                      style={{ borderRadius: "0.25rem" }}
                    />
                  </Box>
                </Link>
              </Box>
              <Box sx={{ color: "text.light", pl: 2, pr: 2 }}>
                <Typography variant="h4" fontWeight={500}>
                  {novel.title}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  <FontAwesomeIcon
                    icon={faPenNib}
                    width={18}
                    style={{ marginRight: "0.5rem" }}
                  />
                  {novel.author.name}
                </Typography>
                {/* <Box> */}
                <Grid container spacing={1}>
                  {/* thể loại chính */}
                  <Grid {...novelStatusGrid.name}>
                    <Typography>Thể loại chính</Typography>
                  </Grid>
                  <Grid {...novelStatusGrid.info}>
                    <Chip
                      color="warning"
                      label={novel.primary_genre.name}
                      size="small"
                    />
                  </Grid>

                  {/* tags */}
                  <Grid {...novelStatusGrid.name}>
                    <Typography>Tags</Typography>
                  </Grid>
                  <Grid {...novelStatusGrid.info}>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {novel.tags.map((tag) => (
                        <Chip
                          key={tag.id}
                          color="form"
                          label={tag.name}
                          size="small"
                        />
                      ))}
                    </Box>
                  </Grid>
                  {/* lượt xem */}
                  <Grid {...novelStatusGrid.name}>
                    <Typography>Lượt xem</Typography>
                  </Grid>
                  <Grid {...novelStatusGrid.info}>
                    <Typography>{numberFormat(novel.num_views)}</Typography>
                  </Grid>
                </Grid>
                {/* </Box> */}
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
