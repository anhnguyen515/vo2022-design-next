import { Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { useRouter } from "next/router";
import React from "react";

export default function CategoryTitle({ children, href }) {
  const router = useRouter();
  return (
    <>
      <Typography
        className="category--title"
        variant="h2"
        fontSize="1.5rem"
        fontWeight={700}
        onClick={() => {
          if (href) router.push(href);
          else return;
        }}
        sx={{
          display: "inline-block",
          backgroundColor: "primary.main",
          color: "text.light",
          pl: 2,
          pr: 2,
          height: "2.4rem",
          lineHeight: "2.4rem",
          width: "auto",
          position: "relative",
          transition: "all 0.2s",
          cursor: "pointer",
          "&:hover": {
            color: "primary.main",
            backgroundColor: "primary.light",
            ":after": {
              backgroundColor: "primary.light",
            },
          },
          "&::before": {
            content: '""',
            position: "absolute",
            left: "2.5rem",
            right: "-1.3rem",
            bottom: "-0.5rem",
            height: "2.4rem",
            lineHeight: "2.4rem",
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
            lineHeight: "2.4rem",
            backgroundColor: "primary.main",
            transform: "skewX(-15deg)",
            transition: "all 0.2s",
            zIndex: -1,
          },
        }}
      >
        {children}
      </Typography>
    </>
  );
}
