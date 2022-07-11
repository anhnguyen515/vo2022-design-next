import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function ComicsListHeader({ title, subtitle }) {
  const constraintsRef = useRef(null);
  return (
    <>
      <Box
        component={motion.div}
        ref={constraintsRef}
        sx={{
          position: "relative",
          backgroundImage: "linear-gradient(50deg,#222831,#222431)",
          color: "text.light",
          padding: 3,
          pt: 10,
          pb: 10,

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
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
          variant="h1"
          fontSize="3rem"
          component={motion.h1}
          animate={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ delay: 0.1 }}
          fontWeight={700}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          component={motion.div}
          animate={{ y: [-100, 0], opacity: [0, 1] }}
          fontWeight={500}
        >
          {subtitle}
        </Typography>
        <Box sx={{ position: "absolute" }}>
          <Box
            component={motion.div}
            drag
            dragConstraints={constraintsRef}
            animate={{ x: -100, y: [600, -400], rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity }}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              width: "3rem",
              height: "3rem",
              borderRadius: 3,
            }}
          ></Box>
          <Box
            component={motion.div}
            drag
            dragConstraints={constraintsRef}
            animate={{ x: [700, 700], y: [500, -400], rotate: [0, 360] }}
            transition={{ type: "linear", duration: 15, repeat: Infinity }}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              width: "10rem",
              height: "10rem",
              borderRadius: 3,
            }}
          ></Box>
          <Box
            component={motion.div}
            drag
            dragConstraints={constraintsRef}
            animate={{ x: [200, 200], y: [400, -400], rotate: [0, 360] }}
            transition={{ type: "linear", duration: 10, repeat: Infinity }}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              width: "2rem",
              height: "2rem",
              borderRadius: 3,
            }}
          ></Box>
          <Box
            component={motion.div}
            drag
            dragConstraints={constraintsRef}
            animate={{ x: 400, y: [300, -400], rotate: [0, 360] }}
            transition={{ type: "linear", duration: 12, repeat: Infinity }}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              width: "9rem",
              height: "9rem",
              borderRadius: 3,
            }}
          ></Box>
          <Box
            component={motion.div}
            drag
            dragConstraints={constraintsRef}
            animate={{ x: [-600, -600], y: [300, -500], rotate: [0, 360] }}
            transition={{ type: "linear", duration: 8, repeat: Infinity }}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              width: "5rem",
              height: "5rem",
              borderRadius: 3,
            }}
          ></Box>
          <Box
            component={motion.div}
            drag
            dragConstraints={constraintsRef}
            animate={{ x: [-400, -400], y: [300, -500], rotate: [0, 360] }}
            transition={{ type: "linear", duration: 10, repeat: Infinity }}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              width: "8rem",
              height: "8rem",
              borderRadius: 3,
            }}
          ></Box>
          <Box
            component={motion.div}
            drag
            dragConstraints={constraintsRef}
            animate={{ x: [-500, -500], y: [300, -600], rotate: [0, 360] }}
            transition={{ type: "linear", duration: 13, repeat: Infinity }}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              width: "6rem",
              height: "6rem",
              borderRadius: 3,
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}
