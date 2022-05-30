import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import parse from "html-react-parser";

export default function Body({ novel }) {
  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Typography variant="h5" fontWeight={500} gutterBottom>
            Giới Thiệu Truyện
          </Typography>
          <Box
            sx={{
              overflow: "auto",
              height: "17rem",
              "&>*": {
                fontWeight: 300,
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
          <Typography variant="h5" fontWeight={500} gutterBottom>
            Chương Mới Cập Nhật
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4} sx={{ border: "1px solid red" }}>
          Thông tin tác giả
        </Grid>
      </Grid>
    </Box>
  );
}
