import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import Comment from "components/common/Comment";
import React, { useEffect, useState } from "react";
import axiosClient from "utility/axiosConfig";
import CommentReply from "../common/CommentReply";

export default function CommentSection({ comment }) {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    async function getReplies() {
      await axiosClient.get(`comments?parent.id=${comment.id}`).then((res) => {
        const data = res.data;
        setReplies(data);
      });
    }
    getReplies();
  }, []);

  return (
    <Box>
      <Comment comment={comment} replies={replies} />
      {replies?.length !== 0 && (
        <>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
            color="primary"
          >
            <FontAwesomeIcon
              icon={faArrowTurnUp}
              width={10}
              style={{ transform: "rotate(90deg)" }}
            />
            Xem các phản hồi
          </Typography>
          <Box ml={9} mt={1} sx={{ "&>*": { mb: 2 } }}>
            {replies.slice(0, 2).map((reply) => (
              <CommentReply key={reply.id} comment={reply} />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}
