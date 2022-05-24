import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import * as React from "react";

function NewUpdatesCard({ work }) {
  return (
    <Card elevation={0} sx={{ display: "flex", borderRadius: 0, mb: 2 }}>
      <Box
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          mr: 1,
        }}
      >
        <Typography
          variant="body1"
          fontSize="0.9rem"
          fontWeight={500}
          gutterBottom
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {work.name}
        </Typography>
        <Typography
          variant="body2"
          fontSize="0.8rem"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {work.writer.name}
        </Typography>
        <Typography variant="caption" color="text.dark" fontSize="0.8rem">
          Chương 1 - 2 giờ trước
        </Typography>
      </Box>
      <CardMedia
        component="img"
        sx={{
          width: 50,
          borderRadius: 1,
          ml: "auto",
          alignItems: "center",
        }}
        image={work.picture}
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default function NewUpdates({ works }) {
  return (
    <>
      <Typography variant="h5" fontWeight={500} gutterBottom>
        Truyện Mới Cập Nhật
      </Typography>
      <Divider sx={{ mt: 2, mb: 2 }} />
      {works.slice(0, 5).map((work) => (
        <NewUpdatesCard key={work.id} work={work} />
      ))}
    </>
  );
}
