import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckIcon from "@mui/icons-material/Check";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function NovelCard({ novel, displayStatus }) {
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        borderRadius: 0,
        transition: "color 0.2s",
      }}
    >
      <Box sx={{ mr: 2, overflow: "hidden", borderRadius: 1 }}>
        <Link href={`/truyen/${novel.id}`} passHref>
          <CardMedia
            component="img"
            sx={{
              width: "5rem",
              borderRadius: 1,
              cursor: "pointer",
              transition: "all 0.2s",
              "&:hover": {
                transform: "scale(1.12)",
              },
            }}
            image={novel.picture}
            alt={`ảnh bìa của ${novel.title}`}
          />
        </Link>
      </Box>
      <Box>
        <Link href={`/truyen/${novel.id}`} passHref>
          <Typography
            variant="h3"
            fontSize="1.6rem"
            fontWeight={700}
            gutterBottom
            sx={{
              cursor: "pointer",
              // transition: "all 0.2s",
              // "&:hover": { color: "secondary.main" },
            }}
          >
            {novel.title}
          </Typography>
        </Link>
        <Typography fontWeight={500} gutterBottom sx={{ position: "relative" }}>
          <Link href={`/tac-gia/${novel.author.slug}`}>
            <a>
              <FontAwesomeIcon
                icon={faPenToSquare}
                width={16}
                style={{ position: "relative", marginRight: "0.5rem", top: 2 }}
              />
              {novel.author.name}
            </a>
          </Link>
        </Typography>
        {/* <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
          {novel.tags.map((tag) => (
            <Chip
              key={tag.id}
              label={tag.name}
              color="sub"
              size="small"
              onClick={() => router.push(`/the-loai/${tag.slug}`)}
              sx={{
                "&:hover": { backgroundColor: "text.light", color: "sub.main" },
              }}
            />
          ))}
        </Box> */}
        {displayStatus && (
          <Box>
            {novel.novel_status === "F" ? (
              <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
                <Chip
                  color="notification"
                  variant="outlined"
                  label={`${novel.num_chapters} Chương`}
                  sx={{ fontWeight: 500 }}
                />
                <Chip
                  icon={<CheckIcon />}
                  color="notification"
                  variant="outlined"
                  label={"Hoàn Thành"}
                  sx={{ fontWeight: 500 }}
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
