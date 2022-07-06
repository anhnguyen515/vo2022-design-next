import { Box, Skeleton, Stack } from "@mui/material";

export default function ChapterDetailSkeleton() {
  return (
    <Stack
      spacing={1}
      direction="row"
      //   alignItems="flex-start"
      sx={{ borderBottom: 1, borderColor: "text.light", mb: 2, pb: 2 }}
    >
      <Skeleton variant="text" sx={{ flex: 1 }} />
      <Stack sx={{ flex: 9 }}>
        <Skeleton variant="text" />
        <Skeleton variant="text" width={100} />
      </Stack>
    </Stack>
  );
}
