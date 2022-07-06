import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FlagIcon from "@mui/icons-material/Flag";
import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import { numberFormat } from "utility/utils";

export default function InfoSection({ chapter }) {
  return (
    <>
      <Paper
        elevation={0}
        variant="outlined"
        sx={{
          display: "flex",
          margin: "auto",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 2,
          // "&>*": { flex: 1 },
          maxWidth: "60rem",
          padding: 3,
          mb: 2,
        }}
      >
        <Box sx={{ display: " flex", alignItems: "center", gap: 1, flex: 1 }}>
          <Avatar
            alt=""
            src={chapter.novel.author.picture}
            sx={{ width: "3rem", height: "3rem" }}
          />
          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              {chapter.novel.author.name}{" "}
              {chapter.novel.author.verified && (
                <CheckCircleIcon color="success" fontSize="small" />
              )}
            </Typography>
            <Typography>{chapter.novel.author.ranking}</Typography>
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6">{chapter.title}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Typography>{numberFormat(chapter.num_chars)} chữ</Typography>
            <Typography>{numberFormat(chapter.num_views)} lượt đọc</Typography>
            <Typography>
              {numberFormat(chapter.num_likes)} lượt thích
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Button
          color="sub"
          variant="outlined"
          endIcon={<FlagIcon />}
          size="small"
        >
          Báo cáo vấn đề
        </Button>
      </Box>
    </>
  );
}
