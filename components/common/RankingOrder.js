import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { rankingColor } from "utility/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

export default function RankingOrder({ order, width, height, crownWidth }) {
  return (
    <>
      <Typography
        sx={{
          borderRadius: "50%",
          backgroundColor: rankingColor(order),
          width: width,
          height: height,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "text.light",
          fontWeight: "bold",
          textShadow: "0 0 1px black",
        }}
      >
        {order !== 1 ? (
          order
        ) : (
          <FontAwesomeIcon icon={faCrown} style={{ width: crownWidth }} />
        )}
      </Typography>
    </>
  );
}
