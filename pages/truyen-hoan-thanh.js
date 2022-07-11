import { Box, Container } from "@mui/material";
import ComicsListHeader from "components/NovelsListPage/Header";

export default function FinishedComics() {
  return (
    <>
      <ComicsListHeader
        title={"Truyện Sáng Tác Full Hay Nhất"}
        subtitle={
          "Danh sách những truyện sáng tác hay đã hoàn thành tại Vietnovel Origin"
        }
      />
      <Container maxWidth="2xl">
        <Box sx={{ padding: 3 }}>Truyện hoàn thành</Box>
      </Container>
    </>
  );
}
