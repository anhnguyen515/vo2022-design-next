import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckIcon from "@mui/icons-material/Check";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

export default function NovelCard({ novel, displayStatus }) {
  const router = useRouter();
  return (
    <Card elevation={0} sx={{ display: "flex", borderRadius: 0 }}>
      <Box>
        <Link href={`/truyen/${novel.id}`}>
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
        <Typography variant="h6" fontSize="1.6rem" fontWeight={600}>
          <Link href={`/truyen/${novel.id}`}>
            <a>{novel.title}</a>
          </Link>
        </Typography>
        <Typography variant="body1" sx={{ position: "relative" }}>
          <Link href={`/tac-gia/${novel.author.slug}`}>
            <a>
              <FontAwesomeIcon
                icon={faPenNib}
                width={16}
                style={{ position: "relative", marginRight: "0.5rem", top: 2 }}
              />
              {novel.author.name}
            </a>
          </Link>
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
          {novel.tags.map((tag) => (
            <Chip
              key={tag.id}
              label={tag.name}
              color="sub"
              size="small"
              onClick={() => router.push(`/the-loai/${tag.slug}`)}
            />
          ))}
        </Box>
        {displayStatus && (
          <Box>
            {novel.novel_status === "F" ? (
              <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
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
            ) : (
              <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
                <Chip color="primary" variant="outlined" label={`Chương 1`} />
                <Chip
                  icon={<WatchLaterIcon />}
                  color="primary"
                  variant="outlined"
                  label={`2 giờ trước`}
                />
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Card>
  );
}
