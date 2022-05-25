import { Box, Paper, Typography } from "@mui/material";
import RankingOrder from "components/common/RankingOrder";
import React from "react";
import { viewsFormat } from "utility/common";
import { Divider } from "@mui/material";

export default function TopFinished({ novels }) {
  return (
    <>
      <Paper sx={{ padding: 2, backgroundColor: "secondary.light" }}>
        <Typography variant="h6" gutterBottom textAlign="center">
          Top Truyện Đã Hoàn Thành
        </Typography>
        {novels.slice(0, 8).map((novel, index) => (
          <Box
            key={novel.id}
            sx={{
              display: "flex",
              gap: 1,
              mb: 1,
            }}
          >
            <Box>
              <RankingOrder
                order={index + 1}
                width="2.5rem"
                height="2.5rem"
                crownWidth={24}
              />
            </Box>
            <Box
              sx={{
                overflow: "hidden",
                // textOverflow: "ellipse",
                // whiteSpace: "nowrap",
              }}
            >
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipse",
                  whiteSpace: "nowrap",
                }}
              >
                {novel.title}
              </Typography>
              <Typography variant="caption">
                {viewsFormat(novel.num_views)} lượt xem
              </Typography>
            </Box>
          </Box>
        ))}
      </Paper>
    </>
  );
}
