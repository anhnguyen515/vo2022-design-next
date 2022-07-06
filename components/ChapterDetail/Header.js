import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import React from "react";
import { numberFormat } from "utility/utils";

export default function Header({ chapter }) {
  return (
    <>
      <Box
        sx={{
          padding: { xs: 1, md: 3 },
          // backgroundColor: "sub.main",
          backgroundImage: `linear-gradient(to bottom, rgba(21, 21, 21, 0.7), rgba(21, 21, 21, 0.7)), url(${chapter.novel.picture})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // height: "10rem",
          color: "text.light",
        }}
      >
        <Container
          sx={{
            display: "flex",
            // gap: 10,
            "&>*": { flex: 1 },
          }}
        >
          <Box>
            <Breadcrumbs
              separator={<NavigateNextIcon />}
              aria-label="breadcrumb"
              sx={{ color: "text.light" }}
            >
              <Link href="/" passHref>
                <Typography
                  fontSize="1.1rem"
                  sx={{ cursor: "pointer", "&:hover": { color: "text.main" } }}
                >
                  Trang chủ
                </Typography>
              </Link>
              <Link href={`/truyen/${chapter.novel.id}`} passHref>
                <Typography
                  fontSize="1.1rem"
                  sx={{ cursor: "pointer", "&:hover": { color: "text.main" } }}
                >
                  {chapter.novel.title}
                </Typography>
              </Link>
              <Typography color="text.light" fontSize="1.1rem" fontWeight={700}>
                Chương {chapter.chap_num}
              </Typography>
            </Breadcrumbs>
            <Typography variant="h4" sx={{ mt: 3 }} gutterBottom>
              {chapter.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Tác giả: {chapter.novel.author.name}
            </Typography>
            <Typography sx={{ display: { xs: "block", md: "none" } }}>
              {numberFormat(chapter.num_chars)} chữ -{" "}
              {numberFormat(chapter.num_views)} lượt đọc -{" "}
              {numberFormat(chapter.num_likes)} lượt thích
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box>
              <Typography sx={parameter.name}>Thích</Typography>
              <Typography sx={parameter.value}>
                {numberFormat(chapter.num_likes)}
              </Typography>
            </Box>
            <Box>
              <Typography sx={parameter.name}>Chữ</Typography>
              <Typography sx={parameter.value}>
                {numberFormat(chapter.num_chars)}
              </Typography>
            </Box>
            <Box>
              <Typography sx={parameter.name}>Lượt đọc</Typography>
              <Typography sx={parameter.value}>
                {numberFormat(chapter.num_views)}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

const parameter = {
  name: {
    fontSize: "1.2rem",
    fontWeight: 500,
  },
  value: {
    fontSize: "1.4rem",
    fontWeight: 600,
  },
};
