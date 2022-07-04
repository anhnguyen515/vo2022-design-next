import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import React from "react";
import { rankingColor } from "utility/utils";

export default function RankingOrder({
  order,
  width,
  height,
  rem,
  royalRanking,
}) {
  return (
    <>
      <Typography
        sx={
          royalRanking
            ? {
                backgroundColor: "background.default",
                borderRadius: "50%",
                border: 3,
                borderColor: rankingColor(order),
                color: rankingColor(order),
                fontWeight: "bold",
                width: width,
                height: height,
                fontSize: `${rem}rem`,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
            : {
                backgroundColor: rankingColor(order),
                borderRadius: "50%",
                color: "text.light",
                fontWeight: "bold",
                textShadow: "0 0 1px black",
                width: width,
                height: height,
                fontSize: `${rem}rem`,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
        }
      >
        {order !== 1 ? (
          order
        ) : (
          <FontAwesomeIcon
            icon={faCrown}
            style={{ width: `${rem + 0.3}rem` }}
          />
        )}
      </Typography>
    </>
  );
}
