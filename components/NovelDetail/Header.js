import AbcIcon from "@mui/icons-material/Abc";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HomeIcon from "@mui/icons-material/Home";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ageColor, novelStatus, numberFormat } from "utility/common";

export default function Header({ novel }) {
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
      {/* breadcrumbs */}
      <Box>
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
          <Typography fontWeight={500} color="text.light">
            {novel.title}
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* thông tin truyện */}
      <Box>
        <Grid container columnSpacing={5}>
          {/* thumbnail */}
          <Grid item xs={0} md={3} xl={2}>
            <Image
              alt={`ảnh bìa của ${novel.title}`}
              src={novel.picture}
              width={2}
              height={3}
              layout="responsive"
              style={{
                borderRadius: "0.25rem",
              }}
            />
          </Grid>

          {/* chi tiết */}
          <Grid item xs={12} md={9} xl={10}>
            {/* danh hiệu */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <Chip
                color={novel.top_stripe.includes("1") ? "error" : "form"}
                icon={<EmojiEventsIcon />}
                label={novel.top_stripe}
                sx={{
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              />
              {novel.is_vip && (
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
            {/* tiêu đề truyện */}
            <Box
              mt={1}
              mb={1}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <Typography variant="h4" fontWeight="bold">
                {novel.title}
              </Typography>
              <IconButton color="text">
                <BookmarkAddIcon fontSize="large" />
              </IconButton>
              <IconButton color="warning">
                <BookmarkAddedIcon fontSize="large" />
              </IconButton>
            </Box>
            {/* tổng chữ, lượt xem, lượt thích */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <AbcIcon fontSize="large" /> {numberFormat(novel.num_words)}
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <VisibilityIcon /> {numberFormat(novel.num_views)}
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <ThumbUpIcon /> {numberFormat(novel.num_likes)}
              </Typography>
            </Box>
            {/* rating */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mt: 2,
                mb: 2,
              }}
            >
              <Rating
                value={4.3}
                precision={0.1}
                emptyIcon={
                  <StarIcon
                    fontSize="inherit"
                    sx={{ opacity: 0.2, color: "warning.light" }}
                  />
                }
                size="large"
                readOnly
              />
              <Typography fontStyle="italic">(24 lượt)</Typography>
            </Box>
            {/* status */}
            <Box>
              <Grid container spacing={1}>
                {/* tình trạng */}
                <Grid {...novelStatusGrid.name}>
                  <Typography fontWeight={500}>Tình trạng</Typography>
                </Grid>
                <Grid {...novelStatusGrid.info}>
                  <Typography>{novelStatus(novel.novel_status)}</Typography>
                </Grid>

                {/* số chương */}
                <Grid {...novelStatusGrid.name}>
                  <Typography fontWeight={500}>Số chương</Typography>
                </Grid>
                <Grid {...novelStatusGrid.info}>
                  <Typography>{novel.num_chapters}</Typography>
                </Grid>

                {/* thể loại chính */}
                <Grid {...novelStatusGrid.name}>
                  <Typography fontWeight={500}>Thể loại chính</Typography>
                </Grid>
                <Grid {...novelStatusGrid.info}>
                  <Chip
                    color="success"
                    label={novel.primary_genre.name}
                    size="small"
                    onClick={() =>
                      router.push(`/the-loai/${novel.primary_genre.slug}`)
                    }
                  />
                </Grid>

                {/* tags */}
                <Grid {...novelStatusGrid.name}>
                  <Typography fontWeight={500}>Tags</Typography>
                </Grid>
                <Grid {...novelStatusGrid.info}>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {novel.tags.map((tag) => (
                      <Chip
                        key={tag.id}
                        color="secondary"
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
                  <Typography color={ageColor(novel.age_rank)}>
                    {novel.age_rank}+
                  </Typography>
                </Grid>
              </Grid>
              {/* cta */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PlayArrowIcon />}
                >
                  Đọc từ đầu
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
