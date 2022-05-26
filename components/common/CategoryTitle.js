import { Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";

export default function CategoryTitle({ children }) {
  return (
    <>
      <Typography
        className="category--title"
        variant="h6"
        fontWeight={500}
        sx={{
          display: "inline-block",
          backgroundColor: "form.main",
          color: "text.light",
          pl: 1,
          pr: 1,
          height: "2.4rem",
          lineHeight: "2.4rem",
          width: "auto",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            left: "2.5rem",
            right: "-1.3rem",
            bottom: "-0.5rem",
            height: "2.4rem",
            backgroundColor: orange[400],
            transform: "skewX(-15deg)",
            zIndex: -1,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            left: "0.5rem",
            right: "-0.7rem",
            height: "2.4rem",
            backgroundColor: "form.main",
            transform: "skewX(-15deg)",
            zIndex: -1,
          },
        }}
      >
        {children}
      </Typography>
    </>
  );
}
