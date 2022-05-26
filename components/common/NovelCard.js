import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import parse from "html-react-parser";
import Link from "next/link";
import * as React from "react";

export default function NovelCard({ novel }) {
  return (
    <Card elevation={0} sx={{ display: "flex", borderRadius: 0 }}>
      <Box>
        <Link href={`/${novel.slug}`} passHref>
          <CardMedia
            component="img"
            sx={{
              width: 100,
              borderRadius: 1,
              mr: 2,
              cursor: "pointer",
            }}
            image={novel.picture}
            alt={`ảnh bìa của ${novel.title}`}
          />
        </Link>
      </Box>
      <Box>
        <Link href={`/${novel.slug}`} passHref>
          <Typography
            variant="h6"
            fontSize="1.6rem"
            fontWeight={"bold"}
            sx={{ cursor: "pointer" }}
          >
            {novel.title}
          </Typography>
        </Link>
        <Link href={`/tac-gia/${novel.author.slug}`} passHref>
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faPenNib} width={16} />
            {novel.author.name}
          </Typography>
        </Link>
        <Box
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",

            fontSize: "0.9rem",
            color: "text.dark",
            mt: 1,
          }}
        >
          {parse(novel.summary)}
        </Box>
        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
          <Chip
            color="notification"
            variant="outlined"
            label={`${novel.num_chapters} chương`}
            sx={{ fontWeight: "bold" }}
          />
          <Chip
            color="notification"
            variant="outlined"
            label={"Hoàn Thành"}
            sx={{ fontWeight: "bold" }}
          />
        </Box>
      </Box>
    </Card>
  );
}
