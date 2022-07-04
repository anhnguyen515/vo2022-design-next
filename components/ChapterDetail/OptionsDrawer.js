import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import Slider from "@mui/material/Slider";

export default function OptionsDrawer() {
  const [state, setState] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState(840);

  function handleChangeSlider(event, newValue) {
    setSliderValue(newValue);
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box>
      <React.Fragment key={"right"}>
        <IconButton
          onClick={toggleDrawer("right", true)}
          sx={{
            "&:hover": { color: "text.light", backgroundColor: "primary.main" },
          }}
        >
          <SettingsIcon />
        </IconButton>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "background.default",
              padding: 1,
            },
          }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          <Box sx={{ minWidth: 200, pl: 2, pr: 2 }}>
            <Slider
              size="small"
              value={sliderValue}
              min={640}
              max={1040}
              valueLabelDisplay="auto"
              onChange={handleChangeSlider}
            />
          </Box>
        </Drawer>
      </React.Fragment>
    </Box>
  );
}
