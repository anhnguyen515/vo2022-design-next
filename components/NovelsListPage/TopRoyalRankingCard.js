import {
  faEye,
  faPenToSquare,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { numberFormat } from "utility/utils";
import { motion } from "framer-motion";

export default function TopRoyalRankingCard({ novel }) {
  const router = useRouter();
  return (
    <>
      <Stack
        spacing={2}
        sx={{ backgroundColor: "text.light", borderRadius: 1 }}
      >
        <Stack
          alignItems="center"
          sx={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(31, 31, 31, 0.7), rgba(31, 31, 31, 0.7)), 
              url(${novel.picture})
              `,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: 1,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            padding: 5,
            width: "100%",
          }}
        >
          <Box
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push(`/truyen/${novel.id}`)}
            sx={{
              border: 1,
              borderColor: "text.light",
              borderRadius: 1,
              position: "relative",
              width: "15rem",
              aspectRatio: "2/3",
              cursor: "pointer",
            }}
          >
            <Image
              alt={`ảnh bìa của ${novel.title}`}
              src={novel.picture}
              layout="fill"
              style={{ borderRadius: ".25rem" }}
            />
          </Box>
        </Stack>
        <Stack alignItems="center" sx={{ pl: 2, pr: 2, pb: 2 }}>
          <Chip
            label={novel.top_stripe}
            icon={<EmojiEventsIcon />}
            color="error"
            sx={{
              fontSize: "1.1rem",
              fontWeight: 700,
            }}
          />
          <Typography
            variant="h2"
            fontSize="2.5rem"
            fontWeight={700}
            color="sub.main"
            sx={{
              mt: 2,
              mb: 2,
              cursor: "pointer",
            }}
            onClick={() => router.push(`/truyen/${novel.id}`)}
          >
            {novel.title}
          </Typography>
          <Stack
            direction={{ xs: "column", lg: "row" }}
            alignItems="center"
            spacing={5}
          >
            <Typography
              fontSize="1.2rem"
              fontWeight={500}
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
          </Stack>
          <Stack direction="row" spacing={1} mt={1}>
            <Chip color="primary" variant="outlined" label={`4 chương`} />
            <Chip color="primary" variant="outlined" label={`Còn tiếp`} />
          </Stack>
          <Box
            mt={2}
            mb={2}
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 5,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {novel.summary}
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
