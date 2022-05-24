import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CategoryLayout from "components/Layout/CategoryLayout";
import * as React from "react";
import { viewsFormat } from "utility/common";

function MostReadCard({ work }) {
  return (
    <Card elevation={0} sx={{ display: "flex", borderRadius: 0, mb: 2 }}>
      <CardMedia
        component="img"
        sx={{
          width: 50,
          borderRadius: 1,
          alignItems: "center",
          mr: 1,
        }}
        image={work.picture}
        alt={`ảnh bìa của ${work.name}`}
      />
      <Box
        sx={{
          overflow: "hidden",
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
          {viewsFormat(work.views)} lượt xem - 3 năm trước
        </Typography>
      </Box>
    </Card>
  );
}

export default function MostRead({ works }) {
  return (
    <>
      <CategoryLayout title="Truyện Đọc Nhiều">
        {works.slice(0, 10).map((work) => (
          <MostReadCard key={work.id} work={work} />
        ))}
      </CategoryLayout>
    </>
  );
}
