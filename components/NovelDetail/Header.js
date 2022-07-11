import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
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
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ageColor, novelStatus, numberFormat } from "utility/utils";

export default function Header({ novel }) {
  const [bookmark, setBookmark] = useState(false);
  const [fav, setFav] = useState(false);

  const router = useRouter();
  const novelStatusGrid = {
    name: {
      item: true,
      xs: 4,
      md: 3,
    },
    info: {
      item: true,
      xs: 8,
      md: 9,
    },
  };

  const fadeInRight = {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <>
      {/* breadcrumbs */}
      <Box>
        <Breadcrumbs
          separator={<NavigateNextIcon />}
          aria-label="breadcrumbs"
          sx={{ mb: 2, mt: 2, "&>*": { color: "text.light" } }}
        >
          <Link href={`/`} passHref>
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "text.main",
                },
              }}
            >
              Trang chủ
            </Typography>
          </Link>
          <Typography fontWeight={700} color="text.light">
            {novel.title}
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* thông tin truyện */}
      <Box>
        <Grid container columnSpacing={5}>
          {/* thumbnail */}
          <Grid item xs={0} md={3} xl={2}>
            <Box
              component={motion.div}
              variants={fadeInRight}
              initial="initial"
              animate="animate"
              whileHover={{ y: -10, cursor: "pointer" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push(`/truyen/${novel.id}/chuong/1`)}
              sx={{ position: "relative", width: "15rem", aspectRatio: "2/3" }}
            >
              <Image
                alt={`ảnh bìa của ${novel.title}`}
                src={novel.picture}
                layout="fill"
                style={{
                  borderRadius: "0.5rem",
                }}
              />
            </Box>
          </Grid>

          {/* chi tiết */}
          <Grid container item xs={12} md={9} xl={10}>
            {/* danh hiệu */}
            <Grid
              item
              xs={12}
              md={8}
              component={motion.div}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
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
                mt={2}
                mb={2}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
              >
                <Typography variant="h1" fontSize="2.5rem" fontWeight="bold">
                  {novel.title}
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
                      color="warning"
                      label={novel.primary_genre.name}
                      size="small"
                      onClick={() =>
                        router.push(`/the-loai/${novel.primary_genre.slug}`)
                      }
                    />
                  </Grid>

                  {/* tags */}
                  <Grid {...novelStatusGrid.name}>
                    <Typography fontWeight={500}>Thể loại</Typography>
                  </Grid>
                  <Grid {...novelStatusGrid.info}>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {novel.tags.map((tag) => (
                        <Chip
                          key={tag.id}
                          color="sub"
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
                  <Box
                    mt={2}
                    ml={1}
                    sx={{
                      display: "flex",
                      gap: 3,
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<PlayArrowIcon />}
                      onClick={() =>
                        router.push(`/truyen/${novel.id}/chuong/1`)
                      }
                    >
                      Đọc từ đầu
                    </Button>
                    <Box>
                      <IconButton
                        variant="contained"
                        color="primary"
                        sx={{
                          backgroundColor: "primary.main",
                          color: "text.light",
                        }}
                      >
                        <BookmarkAddIcon />
                      </IconButton>
                    </Box>
                    <Box>
                      <IconButton
                        variant="contained"
                        color="secondary"
                        sx={{
                          backgroundColor: "secondary.main",
                          color: "text.light",
                        }}
                      >
                        <FavoriteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
              </Box>
            </Grid>
            {/* cta */}
            <Grid item xs={12} md={4}>
              {/* tổng chữ, lượt xem, lượt thích */}
              <Box
                component={motion.div}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  fontSize="1.1rem"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <DriveFileRenameOutlineIcon />
                  <Typography fontSize="1.3rem" fontWeight={500} sx={{ ml: 2 }}>
                    {numberFormat(novel.num_words)}
                  </Typography>{" "}
                  chữ
                </Box>
                <Box
                  fontSize="1.1rem"
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <VisibilityIcon />
                  <Typography fontSize="1.3rem" fontWeight={500} sx={{ ml: 2 }}>
                    {numberFormat(novel.num_views)}
                  </Typography>
                  lượt xem
                </Box>
                <Box
                  fontSize="1.1rem"
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <ThumbUpIcon />
                  <Typography fontSize="1.3rem" fontWeight={500} sx={{ ml: 2 }}>
                    {numberFormat(novel.num_likes)}
                  </Typography>
                  lượt thích
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
