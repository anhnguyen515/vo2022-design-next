import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CategoryTitle from "components/common/CategoryTitle";
import HeadPage from "components/common/HeadPage";
import AlsoRead from "components/NovelDetail/AlsoRead";
import AuthorInfo from "components/NovelDetail/AuthorInfo";
import CommentSection from "components/NovelDetail/CommentSection";
import Header from "components/NovelDetail/Header";
import NovelRatings from "components/NovelDetail/NovelRatings";
import NovelTabs from "components/NovelDetail/NovelTabs";
import parse from "html-react-parser";
import Link from "next/link";
import React from "react";
import axiosClient from "utility/axiosConfig";
import RatingSection from "components/NovelDetail/RatingSection";

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const novel = await axiosClient
    .get(`novels?slug=${slug}`)
    .then((res) => res.data);

  const comments = await axiosClient
    .get(`comments?novel.slug=${slug}`)
    .then((res) => res.data);

  const alsoReadNovels = await axiosClient
    .get(`novels`)
    .then((res) => res.data);

  return {
    props: {
      novel,
      comments,
      alsoReadNovels,
    },
  };
}

export default function NovelDetail({ novel, comments, alsoReadNovels }) {
  return (
    <>
      <HeadPage title={`${novel[0].title} - Vietnovel Origin`} />
      {/* header */}
      <Box
        sx={{
          backgroundImage: `
              linear-gradient(to bottom, rgba(61, 61, 61, 0.7), rgba(61, 61, 61, 0.7)), 
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
            <Header novel={novel[0]} />
          </Box>
        </Container>
      </Box>

      {/* body */}
      <Box>
        <Container maxWidth="2xl">
          <Box sx={{ padding: 3 }}>
            <NovelTabs novel={novel[0]} value={0} />
            <br />

            <Box>
              <Grid container spacing={5}>
                {/* cột truyện */}
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
                        {parse(novel[0].summary)}
                        <Typography fontStyle="italic">
                          Chúc bạn có những phút giây thư giãn khi đọc truyện{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {novel[0].title}
                          </span>{" "}
                          tại Vietnovel Origin!
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
                    <Box mb={3}>
                      <CategoryTitle>Bình luận</CategoryTitle>
                      <Box mt={3}>
                        {comments.length !== 0 ? (
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                            }}
                          >
                            {comments
                              .filter((comment) => comment.parent === null)
                              .slice(0, 5)
                              .map((comment) => (
                                <CommentSection
                                  key={comment.id}
                                  comment={comment}
                                />
                              ))}
                            <Button
                              variant="outlined"
                              endIcon={<ArrowRightAlt />}
                              sx={{ alignSelf: "flex-end" }}
                            >
                              Xem thêm bình luận
                            </Button>
                          </Box>
                        ) : (
                          <Typography fontSize="1.1rem" fontStyle="italic">
                            Chưa có bình luận trong truyện này. Bạn có muốn{" "}
                            <Link href={`/truyen/${novel[0].slug}/binh-luan`}>
                              <a style={{ color: "blue" }}>bình luận</a>
                            </Link>{" "}
                            gì đó về truyện này không?
                          </Typography>
                        )}
                      </Box>
                    </Box>

                    {/* bài viết diễn đàn */}
                    <Box mb={3}>
                      <CategoryTitle>Bài Viết Diễn Đàn Liên Quan</CategoryTitle>
                      <Box mt={3}>
                        <Typography fontSize="1.1rem" fontStyle="italic">
                          Chưa có bài viết nào. Bạn có muốn{" "}
                          <Link href={`/truyen/${novel[0].slug}/binh-luan`}>
                            <a style={{ color: "blue" }}>viết cảm nhận</a>
                          </Link>{" "}
                          của mình về truyện này không?
                        </Typography>
                      </Box>
                    </Box>

                    {/* bạn có thể muốn đọc */}
                    <Box mb={3}>
                      <CategoryTitle>Bạn Có Thể Muốn Đọc</CategoryTitle>
                      <Box mt={3} sx={{ "&>*": { mb: 2 } }}>
                        <Grid container spacing={2}>
                          {alsoReadNovels.slice(0, 6).map((novel) => (
                            <Grid key={novel.id} item xs={12} xl={6}>
                              <AlsoRead novel={novel} />
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* cột tác giả */}
                <Grid item xs={12} md={4}>
                  <Box>
                    {/* thông tin tác giả */}
                    <AuthorInfo author={novel[0].author} />
                    {/* đề cử truyện */}
                    <NovelRatings />
                    <br />
                    {/* đề cử tiêu biểu */}
                    <Box mb={3}>
                      {comments.length !== 0 && (
                        <>
                          <CategoryTitle>Đề Cử Tiêu Biểu</CategoryTitle>
                          <Box mt={3}>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                              }}
                            >
                              {comments.slice(0, 5).map((comment) => (
                                <RatingSection
                                  key={comment.id}
                                  comment={comment}
                                  isRating
                                />
                              ))}
                              <Button
                                variant="outlined"
                                endIcon={<ArrowRightAlt />}
                                sx={{ alignSelf: "flex-end" }}
                              >
                                Xem thêm đề cử
                              </Button>
                            </Box>
                          </Box>
                        </>
                      )}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
