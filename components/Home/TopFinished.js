import { Box, Paper, Typography } from "@mui/material";
import RankingOrder from "components/common/RankingOrder";
import Link from "next/link";
import React from "react";
import { numberFormat } from "utility/utils";

export default function TopFinished({ novels }) {
  return (
    <>
      <Paper
        elevation={0}
        sx={{ borderRadius: 3, padding: 2, backgroundColor: "text.light" }}
      >
        <Typography
          variant="h2"
          fontSize="1.2rem"
          fontWeight={600}
          gutterBottom
          textAlign="center"
        >
          Top Truyện Đã Hoàn Thành
        </Typography>
        {novels.slice(0, 8).map((novel, index) => (
          <Box
            key={index}
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
                rem={1.2}
              />
            </Box>
            <Box
              sx={{
                overflow: "hidden",
                // textOverflow: "ellipse",
                // whiteSpace: "nowrap",
              }}
            >
              <Link href={`/truyen/${novel.id}`} passHref>
                <Typography
                  variant="h3"
                  fontSize="1rem"
                  fontWeight={500}
                  sx={{
                    cursor: "pointer",
                    overflow: "hidden",
                    textOverflow: "ellipse",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      fontWeight: 700,
                    },
                  }}
                >
                  {novel.title}
                </Typography>
              </Link>
              <Typography variant="caption">
                {numberFormat(novel.num_views)} lượt xem
              </Typography>
            </Box>
          </Box>
        ))}
      </Paper>
    </>
  );
}
