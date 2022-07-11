import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarIcon from "@mui/icons-material/Star";
import { numberFormat } from "utility/utils";

export default function AlsoRead({ novel }) {
  const router = useRouter();
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        borderRadius: 0,
      }}
    >
      <Box>
        <Link href={`/truyen/${novel.id}`}>
          <a>
            <CardMedia
              component="img"
              sx={{
                width: "5rem",
                borderRadius: 1,
                mr: 2,
                cursor: "pointer",
              }}
              image={novel.picture}
              alt={`ảnh bìa của ${novel.title}`}
            />
          </a>
        </Link>
      </Box>
      <Box>
        <Link href={`/truyen/${novel.id}`} passHref>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ cursor: "pointer", "&:hover": { color: "secondary.main" } }}
          >
            {novel.title}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ position: "relative" }}>
          <Link href={`/tac-gia/${novel.author.slug}`}>
            <a>
              <FontAwesomeIcon
                icon={faPenToSquare}
                width={14}
                style={{ position: "relative", marginRight: "0.5rem", top: 2 }}
              />
              {novel.author.name}
            </a>
          </Link>
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, mt: 1 }}>
          <Typography
            fontWeight={500}
            variant="body2"
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            <VisibilityIcon fontSize="small" color="favorite" />{" "}
            {numberFormat(novel.num_views)}
          </Typography>
          <Typography
            fontWeight={500}
            variant="body2"
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            <ThumbUpIcon fontSize="small" color="like" />
            {numberFormat(novel.num_likes)}
          </Typography>
          <Typography
            fontWeight={500}
            variant="body2"
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            <StarIcon fontSize="small" color="warning" />
            4.8
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
          {novel.tags.map((tag) => (
            <Chip
              key={tag.id}
              label={tag.name}
              size="small"
              variant="outlined"
              color="sub"
              onClick={() => router.push(`/the-loai/${tag.slug}`)}
              sx={{ opacity: 0.7 }}
            />
          ))}
        </Box>
      </Box>
    </Card>
  );
}
