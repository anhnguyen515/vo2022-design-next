import CloseIcon from "@mui/icons-material/Close";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { Divider, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import * as React from "react";
import { getAllNovelChapters } from "utility/apis";

export default function ChaptersDrawer() {
  const router = useRouter();
  const { slug } = router.query;
  const [state, setState] = React.useState(false);
  const [chapters, setChapters] = React.useState(null);

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
      const data = await getAllNovelChapters(slug);
      setChapters(data);
    }
    getChapters();
  }, []);

  return (
    <Box>
      <React.Fragment>
        <IconButton
          onClick={toggleDrawer("left", true)}
          sx={{
            "&:hover": { color: "text.light", backgroundColor: "sub.main" },
          }}
        >
          <FormatListNumberedIcon />
        </IconButton>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "background.default",
              width: 350,
              padding: 1,
            },
          }}
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          <Box sx={{ pl: 2, pr: 2 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h4" fontWeight={500} gutterBottom>
                Chương
              </Typography>
              <IconButton
                onClick={toggleDrawer("left", false)}
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
            <Divider sx={{ mb: 2 }} />
            <Box>
              {chapters?.map((chapter, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="flex-start"
                  sx={{
                    borderBottom: 1,
                    borderColor: "text.light",
                    cursor: "pointer",
                    mb: 2,
                    pb: 2,
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  <Typography
                    fontSize="1.2rem"
                    fontWeight={500}
                    sx={{ flex: 1 }}
                  >
                    {chapter.chap_num}.
                  </Typography>
                  <Typography
                    fontSize="1.1rem"
                    fontWeight={500}
                    sx={{ flex: 10 }}
                  >
                    {chapter.title}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Box>
        </Drawer>
      </React.Fragment>
    </Box>
  );
}
