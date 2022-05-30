import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import React from "react";
import { rankingColor, ratingColor } from "utility/common";

export default function RatingScore({ score, width, height, fontSize }) {
  return (
    <>
      <Typography
        sx={{
          backgroundColor: ratingColor(score),
          borderRadius: "50%",
          color: "text.light",
          fontWeight: "bold",
          textShadow: "0 0 1px black",
          width: width,
          height: height,
          fontSize: fontSize,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {score}
      </Typography>
    </>
  );
}
