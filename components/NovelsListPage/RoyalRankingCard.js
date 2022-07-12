import {
  faEye,
  faPenToSquare,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Chip, Stack, Typography } from "@mui/material";
import RankingOrder from "components/common/RankingOrder";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { numberFormat } from "utility/utils";

export default function RoyalRankingCard({ novel, order }) {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Box
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => router.push(`/truyen/${novel.id}`)}
          sx={{
            position: "relative",
            borderRadius: 1,
            width: "7rem",
            aspectRatio: "2/3",
            cursor: "pointer",
            overflow: "hidden",
          }}
        >
          <Image
            alt={`ảnh bìa của ${novel.title}`}
            src={novel.picture}
            layout="fill"
            style={{
              borderRadius: ".25rem",
              transition: "all 0.2s",
              transform: hover ? "scale(1.1)" : "",
            }}
          />
        </Box>
        <Box>
          <Stack direction="row" alignItems="center" spacing={1}>
            <RankingOrder
              order={order}
              width={"2rem"}
              height={"2rem"}
              rem={1.3}
              royalRanking={!hover}
            />
            <Typography
              variant="h2"
              fontSize="1.8rem"
              fontWeight={700}
              color="sub.main"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => router.push(`/truyen/${novel.id}`)}
              sx={{ cursor: "pointer" }}
            >
              {novel.title}
            </Typography>
          </Stack>
          <Typography
            fontSize="1rem"
            fontWeight={500}
            gutterBottom
            sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
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
