import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { viewsFormat } from "utility/common";

export default function TopFinished({ works }) {
  return (
    <>
      <Paper sx={{ padding: 2, backgroundColor: "secondary.light" }}>
        <Typography
          variant="h6"
          gutterBottom
          textAlign="center"
          // sx={{
          //   overflow: "hidden",
          //   textOverflow: "ellipsis",
          //   whiteSpace: "nowrap",
          // }}
        >
          Top Truyện Đã Hoàn Thành
        </Typography>
        {works.slice(0, 8).map((work, index) => (
          <Box key={work.id} sx={{ display: "flex", gap: 1, mb: 1 }}>
            <Box>
              <Typography
                sx={{
                  borderRadius: "50%",
                  backgroundColor: "form.main",
                  width: "2rem",
                  height: "2rem",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "text.light",
                }}
              >
                {index + 1}
              </Typography>
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
                {work.name}
              </Typography>
              <Typography variant="caption">
                {viewsFormat(work.views)} lượt xem
              </Typography>
            </Box>
          </Box>
        ))}
      </Paper>
    </>
  );
}
