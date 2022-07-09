import { Box, Container } from "@mui/material";
import RoyalRankingHeader from "components/RoyalRankingPage/Header";
import { useEffect, useState } from "react";
import axiosClient from "utility/axiosConfig";

export default function RoyalRanking() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await axiosClient
        .get("http://192.168.0.185:8000/api-vo/novel/get-bookmark-list/")
        .then((res) => res.data);
      setData(data);
    }
    getData();
  }, []);

  return (
    <>
      <RoyalRankingHeader />
      <Container maxWidth="2xl">
        <Box sx={{ padding: 3 }}>Kim Bảng</Box>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Container>
    </>
  );
}
