import {
  Box,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import ComicsListHeader from "components/NovelsListPage/Header";
import RoutingComponent from "components/NovelsListPage/RoutingComponent";
import RoyalRankingCard from "components/NovelsListPage/RoyalRankingCard";
import TopRoyalRankingCard from "components/NovelsListPage/TopRoyalRankingCard";
import { motion } from "framer-motion";
import { getRoyalRanking } from "utility/apis";

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
    hidden: { x: 200, opacity: 0, transition: { duration: 0.5 } },
    show: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const topItem = {
    hidden: { y: 200, opacity: 0, transition: { duration: 0.5 } },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
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
        <Box
          component={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
          sx={{ padding: 3, pt: 6 }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box component={motion.div} variants={topItem}>
                <TopRoyalRankingCard novel={novels[0]} />
              </Box>
              <Stack
                mt={3}
                sx={{ border: "1px solid red", position: "sticky", top: 100 }}
              >
                <RoutingComponent />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={4} sx={{ overflow: "hidden" }}>
                {novels.slice(1).map((novel, index) => (
                  <Box
                    component={motion.div}
                    variants={item}
                    key={index}
                    sx={{ position: "relative" }}
                  >
                    <RoyalRankingCard novel={novel} order={index + 2} />
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
          <Stack mt={5} alignItems="center">
            <Pagination count={10} color="primary" />
          </Stack>
        </Box>
      </Container>
      {/* kim bảng là gì */}
      <Container maxWidth="md">
        <Box
          sx={{
            borderTop: 1,
            borderColor: "text.light",
            mt: 3,
            padding: 3,
            "&>*": { mb: 3 },
          }}
        >
          <Typography variant="h2" fontSize="2.3rem" fontWeight={500}>
            Kim Bảng là gì?
          </Typography>
          <Typography fontSize="1.2rem">
            Kim Bảng là bảng xếp hạng những tiểu thuyết hàng đầu đăng tải trên{" "}
            <b>nền tảng truyện sáng tác</b> Vietnovel Origin. Để có thứ hạng cao
            trên Kim Bảng, truyện của bạn cần phải đạt được những tiêu chí nhất
            định như số lượt xem, đề cử, tiến độ xuất bản chương.
          </Typography>
          <Typography fontSize="1.2rem">
            Truyện nằm trong top 20 của Kim Bảng sẽ có một thẻ trạng thái được
            hiển thị tại trang chi tiết truyện.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
