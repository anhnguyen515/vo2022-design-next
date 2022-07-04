import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar, Box, IconButton, Paper, Typography } from "@mui/material";
import parse from "html-react-parser";
import React from "react";
import { timesFromNow } from "utility/utils";

export default function CommentReply({ comment }) {
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "text.light",
          display: "flex",
          gap: 2,
          padding: 1,
        }}
      >
        {/* user avatar*/}
        <Avatar
          alt=""
          src={comment.user.picture}
          sx={{ width: "3rem", height: "3rem" }}
        />
        {/* content */}
        <Box>
          <Typography fontWeight={500} fontSize="1.2rem">
            {comment.user.username}
          </Typography>
          <Typography variant="caption" color="favorite.main" gutterBottom>
            Chương {comment.chap_num}
          </Typography>
          {parse(comment.content_safe)}
          <Box mt={1} sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Typography
              variant="body1"
              fontWeight={500}
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <IconButton color="favorite" size="small">
                <FavoriteIcon fontSize="small" />
              </IconButton>
              {comment.likes.length}
            </Typography>
            <Typography variant="body2" fontWeight={300}>
              {timesFromNow(comment.created_at)}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
