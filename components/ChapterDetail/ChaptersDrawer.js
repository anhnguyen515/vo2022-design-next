import CloseIcon from "@mui/icons-material/Close";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { Divider, Pagination, Stack, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChapterDetailSkeleton from "components/common/Skeleton/ChapterDetailSkeleton";
import { useRouter } from "next/router";
import * as React from "react";
import { getAllNovelChapters } from "utility/apis";

export default function ChaptersDrawer({ currChapter, setCurrChapter }) {
  const router = useRouter();
  const { slug } = router.query;
  const [state, setState] = React.useState(false);
  const [chapters, setChapters] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  React.useEffect(() => {
    async function getChapters() {
      setLoading(true);
      const data = await getAllNovelChapters(slug, page);
      setChapters(data);
      setLoading(false);
    }
    getChapters();
  }, [page]);

  return (
    <Box>
      <React.Fragment>
        <Tooltip title="Danh sách chương" arrow>
          <IconButton
            onClick={toggleDrawer("left", true)}
            sx={{
              "&:hover": { color: "text.light", backgroundColor: "sub.main" },
            }}
          >
            <FormatListNumberedIcon />
          </IconButton>
        </Tooltip>
        <Drawer
          sx={{
            "& .MuiBackdrop-root": {
              backgroundColor: "transparent",
            },
          }}
          PaperProps={{
            sx: {
              backgroundColor: "background.default",
              width: 450,
              // padding: 1,
            },
          }}
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100vh" }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ padding: 3, pt: 1, pb: 1 }}
            >
              <Typography variant="h4" fontWeight={500} gutterBottom>
                Danh Sách Chương
              </Typography>
              <IconButton
                onClick={toggleDrawer("left", false)}
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
            <Divider sx={{ ml: 3, mr: 3 }} />
            {!loading ? (
              <Box sx={{ flex: 1, overflow: "auto", padding: 3 }}>
                {chapters?.map((chapter, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    onClick={() => {
                      setCurrChapter(chapter.chap_num);
                      router.push(`/truyen/${slug}/chuong/${chapter.chap_num}`);
                    }}
                    sx={{
                      borderBottom: 1,
                      borderColor: "text.light",
                      color:
                        chapter.chap_num === currChapter && "secondary.main",
                      cursor: "pointer",
                      mb: 2,
                      pb: 2,
                      transition: "all 0.1s",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    <Typography
                      fontSize="1.3rem"
                      fontWeight={700}
                      sx={{ flex: 1 }}
                    >
                      {chapter.chap_num}.
                    </Typography>
                    <Typography
                      fontSize="1.1rem"
                      fontWeight={500}
                      sx={{ flex: 9 }}
                    >
                      {chapter.title}
                    </Typography>
                  </Stack>
                ))}
              </Box>
            ) : (
              <Box sx={{ flex: 1, overflow: "auto", padding: 3 }}>
                <ChapterDetailSkeleton />
                <ChapterDetailSkeleton />
                <ChapterDetailSkeleton />
                <ChapterDetailSkeleton />
                <ChapterDetailSkeleton />
                <ChapterDetailSkeleton />
                <ChapterDetailSkeleton />
                <ChapterDetailSkeleton />
                <ChapterDetailSkeleton />
                <ChapterDetailSkeleton />
              </Box>
            )}
            <Stack direction="row" justifyContent="center" mt={3} mb={3}>
              <Pagination
                color="primary"
                count={2}
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </Box>
        </Drawer>
      </React.Fragment>
    </Box>
  );
}
