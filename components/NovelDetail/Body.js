import { Box, Grid, Typography } from "@mui/material";
import CategoryTitle from "components/common/CategoryTitle";
import parse from "html-react-parser";
import React from "react";
import AuthorInfo from "./AuthorInfo";
import NovelRatings from "./NovelRatings";

export default function Body({ novel }) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box>
            {/* giới thiệu truyện */}
            <Box mb={3}>
              <CategoryTitle>Giới Thiệu Truyện</CategoryTitle>
              <Box
                sx={{
                  mt: 3,
                  pl: 1,
                  pr: 1,
                  overflow: "auto",
                  height: "18rem",
                  fontWeight: 300,
                  "&>*": {
                    mb: 1,
                  },
                }}
              >
                {parse(novel.summary)}
                <Typography fontStyle="italic">
                  Chúc bạn có những phút giây thư giãn khi đọc truyện{" "}
                  <span style={{ fontWeight: "bold" }}>{novel.title}</span> tại
                  Vietnovel Origin!
                </Typography>
              </Box>
            </Box>

            {/* chương mới */}
            <Box mb={3}>
              <CategoryTitle>Chương Mới Cập Nhật</CategoryTitle>
              <Box mt={3}>
                {[...Array(5).keys()].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      pt: 1,
                      pb: 1,
                      borderBottom: 1,
                      borderColor: "secondary.light",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontSize="1.2rem"
                      color="favorite.main"
                    >
                      Chương 30: Tên chương
                    </Typography>
                    <Typography>2 ngày trước</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* bình luận */}
            <Box>
              <CategoryTitle>Bình luận</CategoryTitle>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <AuthorInfo author={novel.author} />
            <NovelRatings />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
