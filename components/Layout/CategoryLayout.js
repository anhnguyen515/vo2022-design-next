import { Box } from "@mui/material";
import CategoryTitle from "components/common/CategoryTitle";

export default function CategoryLayout({ title, children, href }) {
  return (
    <Box>
      <CategoryTitle href={href}>{title}</CategoryTitle>
      <Box mt={4}>{children}</Box>
    </Box>
  );
}
