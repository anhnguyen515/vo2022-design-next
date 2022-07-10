import { Box, Container } from "@mui/material";
import RoyalRankingHeader from "components/RoyalRankingPage/Header";

export default function RoyalRanking() {
  return (
    <>
      <RoyalRankingHeader />
      <Container maxWidth="2xl">
        <Box sx={{ padding: 3 }}>Kim Bảng</Box>
      </Container>
    </>
  );
}
