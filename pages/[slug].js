import HomeIcon from "@mui/icons-material/Home";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Paper,
  Typography,
  Chip,
  Rating,
} from "@mui/material";
import HeadPage from "components/common/HeadPage";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import axiosClient from "utility/axiosConfig";
import { ageColor, novelStatus, numberFormat } from "utility/common";
import { useRouter } from "next/router";
import AbcIcon from "@mui/icons-material/Abc";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const novel = await axiosClient
    .get(`novels?slug=${slug}`)
    .then((res) => res.data);

  return {
    props: {
      novel,
    },
  };
}

export default function NovelDetail({ novel }) {
  const router = useRouter();
  const novelStatusGrid = {
    name: {
      item: true,
      xs: 4,
      lg: 2,
    },
    info: {
      item: true,
      xs: 8,
      lg: 10,
    },
  };
  return (
    <>
      <HeadPage title={`${novel[0].title} - Vietnovel Origin`} />
      <Box
        sx={{
          backgroundImage: `
              linear-gradient(to bottom, rgba(41, 41, 41, 0.7), rgba(41, 41, 41, 0.7)), 
              url(${novel[0].picture})
              `,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "text.light",
        }}
      >
        <Container maxWidth="2xl">
          <Box sx={{ padding: 3 }}>
            <Breadcrumbs
              aria-label="breadcrumbs"
              sx={{ mb: 2, "&>*": { color: "text.main" } }}
            >
              <Link href={`/`} passHref>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    "&:hover": {
                      color: "text.light",
                    },
                  }}
                >
                  <HomeIcon /> Trang chủ
                </Typography>
              </Link>
              <Link href={`/the-loai/${novel[0].primary_genre.slug}`} passHref>
                <Typography
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      color: "text.light",
                    },
                  }}
                >
                  {novel[0].primary_genre.name}
                </Typography>
              </Link>
              <Typography fontWeight={500} color="text.light">
                {novel[0].title}
              </Typography>
            </Breadcrumbs>
            <Grid container columnSpacing={5}>
              <Grid item xs={0} md={3} xl={2}>
                <Image
                  alt={`ảnh bìa của ${novel[0].title}`}
                  src={novel[0].picture}
                  width={2}
                  height={3}
                  layout="responsive"
                  style={{
                    borderRadius: "0.25rem",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={9} xl={10}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2,
                    mb: 1,
                  }}
                >
                  <Chip
                    color={novel[0].top_stripe.includes("1") ? "error" : "form"}
                    icon={<EmojiEventsIcon />}
                    label={novel[0].top_stripe}
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 500,
                    }}
                  />
                  {novel[0].is_vip && (
                    <Chip
                      color="notification"
                      label="Truyện VIP"
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 500,
                      }}
                    />
                  )}
                </Box>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {novel[0].title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <AbcIcon fontSize="large" />{" "}
                    {numberFormat(novel[0].num_words)}
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <VisibilityIcon /> {numberFormat(novel[0].num_views)}
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <ThumbUpIcon /> {numberFormat(novel[0].num_likes)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mt: 2,
                    mb: 2,
                  }}
                >
                  <Rating value={4.3} precision={0.1} size="large" readOnly />
                  <Typography fontStyle="italic">(24 lượt)</Typography>
                </Box>
                <Grid container spacing={1}>
                  {/* tình trạng */}
                  <Grid {...novelStatusGrid.name}>
                    <Typography fontWeight={500}>Tình trạng</Typography>
                  </Grid>
                  <Grid {...novelStatusGrid.info}>
                    <Typography>
                      {novelStatus(novel[0].novel_status)}
                    </Typography>
                  </Grid>

                  {/* số chương */}
                  <Grid {...novelStatusGrid.name}>
                    <Typography fontWeight={500}>Số chương</Typography>
                  </Grid>
                  <Grid {...novelStatusGrid.info}>
                    <Typography>{novel[0].num_chapters}</Typography>
                  </Grid>

                  {/* thể loại chính */}
                  <Grid {...novelStatusGrid.name}>
                    <Typography fontWeight={500}>Thể loại chính</Typography>
                  </Grid>
                  <Grid {...novelStatusGrid.info}>
                    <Chip
                      color="success"
                      label={novel[0].primary_genre.name}
                      size="small"
                      onClick={() =>
                        router.push(`/the-loai/${novel[0].primary_genre.slug}`)
                      }
                    />
                  </Grid>

                  {/* tags */}
                  <Grid {...novelStatusGrid.name}>
                    <Typography fontWeight={500}>Tags</Typography>
                  </Grid>
                  <Grid {...novelStatusGrid.info}>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {novel[0].tags.map((tag) => (
                        <Chip
                          key={tag.id}
                          color="primary"
                          label={tag.name}
                          size="small"
                          onClick={() => router.push(`/the-loai/${tag.slug}`)}
                        />
                      ))}
                    </Box>
                  </Grid>

                  {/* độ tuổi */}
                  <Grid {...novelStatusGrid.name}>
                    <Typography fontWeight={500}>Độ tuổi</Typography>
                  </Grid>
                  <Grid {...novelStatusGrid.info}>
                    <Typography color={ageColor(novel[0].age_rank)}>
                      {novel[0].age_rank}+
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="2xl">
          <Box sx={{ padding: 3 }}>{novel[0].title}</Box>
        </Container>
      </Box>
    </>
  );
}
