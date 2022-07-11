import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import * as React from "react";

export default function OptionsDrawer({
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
  const widths = [320, 425, 640, 768, 896, 1080];
  const backgroundColors = [
    "readingBackground.default",
    "readingBackground.dark",
    "readingBackground.yellow",
    "readingBackground.blue",
    "readingBackground.teal",
    "readingBackground.pink",
  ];
  const paperColors = [
    "readingPaper.default",
    "readingPaper.dark",
    "readingPaper.yellow",
    "readingPaper.blue",
    "readingPaper.teal",
    "readingPaper.pink",
  ];
  const [state, setState] = React.useState(false);

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
      <React.Fragment>
        <Tooltip title="Cài đặt" arrow>
          <IconButton
            onClick={toggleDrawer("right", true)}
            sx={{
              "&:hover": { color: "text.light", backgroundColor: "sub.main" },
            }}
          >
            <SettingsIcon />
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
              minWidth: 350,
              padding: 1,
            },
          }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          <Box sx={{ pl: 2, pr: 2 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h4" fontWeight={500} gutterBottom>
                Cài Đặt
              </Typography>
              <IconButton
                onClick={toggleDrawer("right", false)}
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
            <Divider sx={{ mb: 2 }} />
            {/* tùy chỉnh màu giao diện đọc */}
            <Typography variant="h5" fontWeight={500} gutterBottom>
              Giao diện
            </Typography>
            <Stack
              mb={5}
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              {backgroundColors.map((color, index) => (
                <Box
                  key={index}
                  onClick={() => handleChangeBackground(color)}
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: color,
                    border: 1,
                    borderColor:
                      backgroundColor === color ? "success.main" : "text.main",
                    borderRadius: "50%",
                    cursor: "pointer",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {backgroundColor === color && <CheckIcon color="success" />}
                </Box>
              ))}
            </Stack>

            {/* tùy chỉnh màu nền đọc */}
            <Typography variant="h5" fontWeight={500} gutterBottom>
              Nền đọc
            </Typography>
            <Stack
              mb={5}
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              {paperColors.map((color, index) => (
                <Box
                  key={index}
                  onClick={() => {
                    handleChangePaperColor(color);
                    handleChangeFontColor(
                      color === "readingPaper.dark" ? "text.light" : "sub.dark"
                    );
                  }}
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: color,
                    border: 1,
                    borderColor:
                      paperColor === color ? "success.main" : "text.main",
                    borderRadius: "50%",
                    cursor: "pointer",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {paperColor === color && <CheckIcon color="success" />}
                </Box>
              ))}
            </Stack>

            {/* tùy chỉnh màu chữ */}
            {/*<Typography variant="h5" fontWeight={500} gutterBottom>
              Màu chữ
                </Typography>*/}

            {/* độ rộng khung đọc */}
            <Typography variant="h5" fontWeight={500} gutterBottom>
              Khung đọc
            </Typography>
            <Stack
              mb={5}
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              {/*<Typography variant="caption">640</Typography>
              <Slider
                // size="small"
                color="secondary"
                value={maxWidth}
                // step={10}
                // marks
                min={640}
                max={1040}
                valueLabelDisplay="auto"
                onChange={handleChangeWidth}
              />
              <Typography variant="caption">1040</Typography>*/}
              <ButtonGroup disableElevation>
                {widths.map((width, index) => (
                  <Button
                    key={index}
                    variant={maxWidth === width ? "contained" : "outlined"}
                    onClick={() => handleChangeWidth(width)}
                  >
                    {width}
                  </Button>
                ))}
              </ButtonGroup>
            </Stack>

            {/* tủy chỉnh font chữ */}
            <Typography variant="h5" fontWeight={500} gutterBottom>
              Font chữ
            </Typography>
            <Stack mb={5}>
              <FormControl fullWidth>
                <Select
                  value={font}
                  defaultValue={"Quicksand"}
                  onChange={handleChangeFont}
                >
                  <MenuItem value={"Merriweather"}>Merriweather</MenuItem>
                  <MenuItem value={"Montserrat"}>Montserrat</MenuItem>
                  <MenuItem value={"Noto Sans"}>Noto Sans</MenuItem>
                  <MenuItem value={"Nunito"}>Nunito</MenuItem>
                  <MenuItem value={"Open Sans"}>Open Sans</MenuItem>
                  <MenuItem value={"Oswald"}>Oswald</MenuItem>
                  <MenuItem value={"Quicksand"}>Quicksand</MenuItem>
                  <MenuItem value={"Raleway"}>Raleway</MenuItem>
                  <MenuItem value={"Roboto"}>Roboto</MenuItem>
                  <MenuItem value={"Source Sans Pro"}>Source Sans Pro</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            {/* tùy chỉnh cỡ chữ */}
            <Typography variant="h5" fontWeight={500} gutterBottom>
              Cỡ chữ
            </Typography>
            <Stack
              mb={5}
              spacing={3}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                size="small"
                variant="contained"
                disabled={fontSize === 10}
                onClick={() => handleChangeFontSize(fontSize - 2)}
              >
                <RemoveIcon />
              </Button>
              <Typography fontSize="1.5rem">{fontSize}</Typography>
              <Button
                size="small"
                variant="contained"
                disabled={fontSize === 50}
                onClick={() => handleChangeFontSize(fontSize + 2)}
              >
                <AddIcon />
              </Button>
            </Stack>
          </Box>
        </Drawer>
      </React.Fragment>
    </Box>
  );
}
