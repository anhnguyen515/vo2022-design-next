import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  faPenToSquare,
  faEye,
  faThumbsUp,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { numberFormat } from "utility/utils";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useRouter } from "next/router";

export default function RoyalRankingCard({ novel }) {
  const router = useRouter();
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Box
          onClick={() => router.push(`/truyen/${novel.id}`)}
          sx={{
            position: "relative",
            width: "8rem",
            aspectRatio: "2/3",
            cursor: "pointer",
          }}
        >
          <Image
            alt={`ảnh bìa của ${novel.title}`}
            src={novel.picture}
            layout="fill"
            style={{ borderRadius: ".5rem" }}
          />
        </Box>
        <Box>
          <Typography
            variant="h2"
            fontSize="1.6rem"
            fontWeight={700}
            color="sub.main"
            gutterBottom
          >
            {novel.title}
          </Typography>
          <Typography
            fontSize="1rem"
            fontWeight={500}
            gutterBottom
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <FontAwesomeIcon icon={faPenToSquare} width={16} />
            {novel.author.name}
          </Typography>
          <Stack direction="row" spacing={3}>
            <Typography
              fontWeight={700}
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <FontAwesomeIcon icon={faEye} width={20} color="#e91e63" />
              {numberFormat(novel.num_views)}
            </Typography>
            <Typography
              fontWeight={700}
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <FontAwesomeIcon icon={faThumbsUp} width={20} color="#2E6FF3" />
              {numberFormat(novel.num_likes)}
            </Typography>
            <Typography
              fontWeight={700}
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <FontAwesomeIcon icon={faStar} width={20} color="#ff9800" />
              4.8
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} mt={1}>
            <Chip variant="outlined" label={`4 chương`} />
            <Chip variant="outlined" label={`Còn tiếp`} />
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
