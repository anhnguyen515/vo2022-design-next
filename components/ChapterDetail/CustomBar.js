import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Box, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ChaptersDrawer from "./ChaptersDrawer";
import OptionsDrawer from "./OptionsDrawer";

export default function CustomBar({
  chapter,
  backgroundColor,
  paperColor,
  maxWidth,
  font,
  fontSize,
  handleChangeBackground,
  handleChangePaperColor,
  handleChangeFont,
  handleChangeFontColor,
  handleChangeFontSize,
  handleChangeWidth,
}) {
  const router = useRouter();
  const [scrollDown, setScrollDown] = useState(false);

  {
    /* check scroll direction */
  }
  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDown(scrollY > lastScrollY ? true : false);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDown]);

  return (
    <>
      <AppBar
        elevation={0}
        variant="outlined"
        color="background"
        position="sticky"
        sx={{
          top: scrollDown ? -100 : { xs: "5rem", md: "4.1rem" },
          transition: "top 0.5s",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            padding: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <IconButton
            sx={{
              "&:hover": {
                color: "text.light",
                backgroundColor: "sub.main",
              },
            }}
            onClick={() => router.push(`/truyen/${chapter.novel.id}`)}
          >
            <MenuBookIcon />
          </IconButton>
          <ChaptersDrawer />
          <OptionsDrawer
            backgroundColor={backgroundColor}
            paperColor={paperColor}
            maxWidth={maxWidth}
            font={font}
            fontSize={fontSize}
            handleChangeBackground={handleChangeBackground}
            handleChangePaperColor={handleChangePaperColor}
            handleChangeFont={handleChangeFont}
            handleChangeFontColor={handleChangeFontColor}
            handleChangeFontSize={handleChangeFontSize}
            handleChangeWidth={handleChangeWidth}
          />
        </Box>
      </AppBar>
    </>
  );
}
