import { Box, Container, Grid, Pagination, Stack } from "@mui/material";
import ComicsListHeader from "components/NovelsListPage/Header";
import { getRoyalRanking } from "utility/apis";
import RoyalRankingCard from "components/NovelsListPage/RoyalRankingCard";
import { motion } from "framer-motion";
import TopRoyalRankingCard from "components/NovelsListPage/TopRoyalRankingCard";

export async function getServerSideProps() {
  const novels = await getRoyalRanking();

  return {
    props: {
      novels,
    },
  };
}

export default function RoyalRanking({ novels }) {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { x: -200, opacity: 0, transition: { duration: 0.5 } },
    show: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <ComicsListHeader
        title={"Kim Bảng - Bảng Xếp Hạng Truyện Chữ"}
        subtitle={
          "Kim Bảng là bảng xếp hạng truyện sáng tác Việt hay nhất tại Vietnovel Origin"
        }
      />
      <Container maxWidth="2xl">
        <Box sx={{ padding: 3 }}>
          <Grid container spacing={2}>
            <Grid item>
              <TopRoyalRankingCard novel={novels[0]} />
            </Grid>
            <Grid item>
              <Stack
                component={motion.div}
                variants={container}
                initial="hidden"
                animate="show"
                spacing={3}
              >
                {novels.slice(1).map((novel, index) => (
                  <Box component={motion.div} variants={item} key={index}>
                    <RoyalRankingCard novel={novel} />
                  </Box>
                ))}
              </Stack>
              <Stack mt={3} alignItems="center">
                <Pagination count={10} color="primary" />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
