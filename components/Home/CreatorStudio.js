import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

export default function CreatorStudio() {
  return (
    <>
      <Paper elevation={0} sx={{ padding: 2, backgroundColor: "text.light" }}>
        <Typography
          variant="h6"
          fontWeight={600}
          textAlign="center"
          gutterBottom
        >
          Bạn Muốn Viết Truyện?
        </Typography>
        <Typography variant="body2">
          Hãy cùng tham gia Vietnovel Origin để tạo nên những câu truyện thuộc
          về chính bạn. Đây là một nền tảng dành cho các tác giả có thể thỏa sức
          sáng tạo nội dung cho riêng mình. Chúng tôi sẵn sàng hỗ trợ bạn bất cứ
          lúc nào. Hãy nhấn vào lựa chọn bên dưới.
        </Typography>
        <Box
          mt={2}
          mb={2}
          sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          <Button variant="contained">Sáng tác truyện ngay</Button>
          <Button variant="outlined">Gửi phản hồi</Button>
        </Box>
        <Typography variant="caption" fontStyle="italic">
          (Mong nhận được góp ý từ bạn)
        </Typography>
      </Paper>
    </>
  );
}
