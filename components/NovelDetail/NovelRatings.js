import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import CategoryTitle from "components/common/CategoryTitle";
import RatingScore from "components/common/RatingScore";
import React from "react";

export default function NovelRatings() {
  return (
    <Box>
      <CategoryTitle>Đề Cử Truyện</CategoryTitle>
      {/* điểm tổng quan */}
      <Box
        mt={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography>Tổng Điểm</Typography>
        <RatingScore score={4.6} width="5rem" height="5rem" fontSize="2.5rem" />
        <Rating readOnly size="large" value={4.6} precision={0.1} />
        <Typography variant="subtitle1">20 lượt đề cử</Typography>
      </Box>

      {/* điểm từng phần */}
      <Box
        mt={2}
        sx={{
          "&>*": {
            mb: 0.5,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight={500}>Văn Phong</Typography>
          <Rating readOnly value={4} precision={0.1} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight={500}>Tuyến Nhân Vật</Typography>
          <Rating readOnly value={5} precision={0.1} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight={500}>Cốt Truyện</Typography>
          <Rating readOnly value={4.5} precision={0.1} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight={500}>Bối Cảnh Truyện</Typography>
          <Rating readOnly value={4.3} precision={0.1} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight={500}>Tốc Độ Ra Chương</Typography>
          <Rating readOnly value={5} precision={0.1} />
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", padding: 2 }}>
        <Button variant="contained">Đến trang đề cử</Button>
      </Box>
    </Box>
  );
}
