import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import parse from "html-react-parser";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import CheckIcon from "@mui/icons-material/Check";

export default function NovelCard({ novel }) {
  const router = useRouter();
  return (
    <Card elevation={0} sx={{ display: "flex", borderRadius: 0 }}>
      <Box>
        <Link href={`/${novel.slug}`}>
          <a>
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
          </a>
        </Link>
      </Box>
      <Box>
        <Typography variant="h6" fontSize="1.6rem" fontWeight={"bold"}>
          <Link href={`/${novel.slug}`} passHref>
            <a>{novel.title}</a>
          </Link>
        </Typography>
        <Typography variant="body1">
          <Link href={`/tac-gia/${novel.author.slug}`}>
            <a
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <FontAwesomeIcon icon={faPenNib} width={16} />
              {novel.author.name}
            </a>
          </Link>
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
          {novel.tags.map((tag) => (
            <Chip
              key={tag.id}
              label={tag.name}
              color="secondary"
              size="small"
              onClick={() => router.push(`/the-loai/${tag.slug}`)}
            />
          ))}
        </Box>
        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
          <Chip
            color="notification"
            variant="outlined"
            label={`${novel.num_chapters} Chương`}
            sx={{ fontWeight: "bold" }}
          />
          <Chip
            icon={<CheckIcon />}
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
