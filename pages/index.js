import { Box, Grid } from "@mui/material";
import HeadPage from "components/common/HeadPage";
import CreatorStudio from "components/pages/Home/CreatorStudio";
import Featured from "components/pages/Home/Featured";
import FinishedWorks from "components/pages/Home/FinishedWorks";
import Genres from "components/pages/Home/Genres";
import MostRead from "components/pages/Home/MostRead";
import MyCarousel from "components/pages/Home/MyCarousel";
import NewUpdates from "components/pages/Home/NewUpdates";
import RoyalRanking from "components/pages/Home/RoyalRanking";
import TopFinished from "components/pages/Home/TopFinished";
import TopWriters from "components/pages/Home/TopWriters";
import axiosClient from "utility/axiosConfig";

export async function getServerSideProps() {
  const genres = await axiosClient.get("genres").then((res) => res.data);

  const works = await axiosClient
    .get("works?_sort=views&_order=desc")
    .then((res) => res.data);

  const writers = await axiosClient.get("writers").then((res) => res.data);

  return {
    props: {
      works,
      genres,
      writers,
    },
  };
}

export default function Home({ works, genres, writers }) {
  return (
    <>
      <HeadPage title="Vietnovel Origin - Truyện Sáng Tác Việt" />
      <Box sx={{ padding: 3 }}>
        {/* phần carousel */}
        <Box>
          <Grid container spacing={4}>
            {/* top truyện đã hoàn thành */}
            <Grid item xs={12} lg={3}>
              <TopFinished works={works} />
            </Grid>

            {/* carousel */}
            <Grid item xs={12} lg={6}>
              <MyCarousel works={works} />
            </Grid>

            {/* creator studio */}
            <Grid item xs={12} lg={3}>
              <CreatorStudio />
            </Grid>
          </Grid>
        </Box>

        {/* phần royal ranking */}
        <Box mt={5}>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={9}>
              <RoyalRanking works={works} />
            </Grid>
            <Grid item xs={12} lg={3}>
              <NewUpdates works={works} />
            </Grid>
          </Grid>
        </Box>

        {/* phần truyện nổi bật */}
        <Box mt={5}>
          <Featured works={works} />
        </Box>

        {/* truyện đọc nhiều & thể loại truyện */}
        <Box mt={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <MostRead works={works} />
            </Grid>
            <Grid item xs={12} md={9}>
              <Genres genres={genres} works={works} />
            </Grid>
          </Grid>
        </Box>

        {/* tác giả bảng & truyện hoàn thành */}
        <Box mt={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <TopWriters writers={writers} />
            </Grid>
            <Grid item xs={12} md={9}>
              <FinishedWorks works={works} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
