import { Box, Container, Grid } from "@mui/material";
import HeadPage from "components/common/HeadPage";
import SyncCarousel from "components/common/SyncCarousel";
import MainCarousel from "components/Home/MainCarousel";
import CreatorStudio from "components/Home/CreatorStudio";
import Featured from "components/Home/Featured";
import FinishedNovels from "components/Home/FinishedNovels";
import Genres from "components/Home/Genres";
import MostRead from "components/Home/MostRead";
import NewUpdates from "components/Home/NewUpdates";
import RoyalRanking from "components/Home/RoyalRanking";
import TopFinished from "components/Home/TopFinished";
import TopWriters from "components/Home/TopWriters";
import axiosClient from "utility/axiosConfig";

export async function getServerSideProps() {
  const genres = await axiosClient.get("genres").then((res) => res.data);

  const novels = await axiosClient
    .get("novels?_sort=views&_order=desc")
    .then((res) => res.data);

  const finishedNovels = await axiosClient
    .get("novels?novel_status=F")
    .then((res) => res.data);

  const authors = await axiosClient.get("authors").then((res) => res.data);

  return {
    props: {
      novels,
      finishedNovels,
      genres,
      authors,
    },
  };
}

export default function Home({ novels, finishedNovels, genres, authors }) {
  return (
    <>
      <HeadPage title="Vietnovel Origin - Truyện Sáng Tác Việt" />
      <Container maxWidth="2xl">
        <Box sx={{ padding: 3 }}>
          {/* phần carousel */}
          <Box mb={10}>
            <Grid container spacing={3}>
              {/* top truyện đã hoàn thành */}
              <Grid item xs={12} lg={3}>
                <TopFinished novels={novels} />
              </Grid>

              {/* carousel */}
              <Grid item xs={12} lg={6}>
                <MainCarousel novels={novels} />
              </Grid>

              {/* creator studio */}
              <Grid item xs={12} lg={3}>
                <CreatorStudio />
              </Grid>
            </Grid>
          </Box>

          {/* phần royal ranking */}
          <Box mb={10}>
            <RoyalRanking novels={novels} />
          </Box>

          {/* truyện mới cập nhật */}
          <Box mb={10}>
            <NewUpdates novels={novels} />
          </Box>

          {/* phần truyện nổi bật */}
          <Box mb={10}>
            <Featured novels={novels} />
          </Box>

          {/* truyện đọc nhiều & thể loại truyện */}
          <Box mb={10}>
            <Grid container spacing={5}>
              <Grid item xs={12} lg={9}>
                <Genres genres={genres} novels={novels} />
              </Grid>
              <Grid item xs={12} lg={3}>
                <MostRead novels={novels} />
              </Grid>
            </Grid>
          </Box>

          {/* tác giả bảng & truyện hoàn thành */}
          <Box mb={10}>
            <Grid container spacing={5}>
              <Grid item xs={12} lg={3}>
                <TopWriters authors={authors} />
              </Grid>
              <Grid item xs={12} lg={9}>
                <FinishedNovels novels={finishedNovels} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
