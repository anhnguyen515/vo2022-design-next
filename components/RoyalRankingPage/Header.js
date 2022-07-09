import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

export default function RoyalRankingHeader() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "linear-gradient(50deg,#222831,#222431)",
          color: "text.light",
          padding: 3,
          pt: 10,
          pb: 10,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          component={motion.div}
          fontWeight={500}
          color="warning.light"
          animate={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ delay: 0.2 }}
        >
          Danh sách truyện
        </Typography>
        <Typography
          variant="h3"
          component={motion.div}
          animate={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ delay: 0.1 }}
          fontWeight={700}
          gutterBottom
        >
          Kim Bảng - Bảng Xếp Hạng Truyện Chữ
        </Typography>
        <Typography
          variant="h6"
          component={motion.div}
          animate={{ y: [-100, 0], opacity: [0, 1] }}
          fontWeight={500}
        >
          Kim Bảng là bảng xếp hạng truyện sáng tác Việt hay nhất tại Vietnovel
          Origin.
        </Typography>
      </Box>
    </>
  );
}
