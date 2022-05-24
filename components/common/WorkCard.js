import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { viewsFormat } from "utility/common";
import parse from "html-react-parser";
import { Chip } from "@mui/material";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WorkCard({ work }) {
  return (
    <Card elevation={0} sx={{ display: "flex", borderRadius: 0, mb: 2 }}>
      <Box>
        <CardMedia
          component="img"
          sx={{
            width: 100,
            borderRadius: 1,
            mr: 2,
          }}
          image={work.picture}
          alt={`ảnh bìa của ${work.name}`}
        />
      </Box>
      <Box>
        <Typography variant="h6" fontSize="1.6rem" fontWeight={"bold"}>
          {work.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <FontAwesomeIcon icon={faPenNib} width={16} />
          {work.writer.name}
        </Typography>
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
          {parse(work.desc_safe)}
        </Box>
        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
          <Chip
            color="notification"
            variant="outlined"
            label={`${work.chapters} chương`}
          />
          <Chip
            color="notification"
            variant="outlined"
            label={work.status ? "Hoàn Thành" : "Hoàn Thành"}
          />
        </Box>
      </Box>
    </Card>
  );
}
