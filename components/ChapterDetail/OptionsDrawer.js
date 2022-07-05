import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import Slider from "@mui/material/Slider";
import {
  Stack,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

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
        <IconButton
          onClick={toggleDrawer("right", true)}
          sx={{
            "&:hover": { color: "text.light", backgroundColor: "sub.main" },
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
          <Box sx={{ minWidth: 300, pl: 2, pr: 2 }}>
            {/* tùy chỉnh màu giao diện đọc */}
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Giao diện
            </Typography>
            <Stack
              mb={5}
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                onClick={() =>
                  handleChangeBackground("readingBackground.light")
                }
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  backgroundColor: "readingBackground.light",
                  border: 1,
                  borderColor:
                    backgroundColor === "readingBackground.light"
                      ? "success.main"
                      : "text.main",
                  borderRadius: "50%",
                  cursor: "pointer",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {backgroundColor === "readingBackground.light" && (
                  <CheckIcon color="success" />
                )}
              </Box>
              <Box
                onClick={() => handleChangeBackground("readingBackground.dark")}
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  backgroundColor: "readingBackground.dark",
                  border: 1,
                  borderColor:
                    backgroundColor === "readingBackground.dark"
                      ? "success.main"
                      : "",
                  borderRadius: "50%",
                  cursor: "pointer",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {backgroundColor === "readingBackground.dark" && (
                  <CheckIcon color="success" />
                )}
              </Box>
              <Box
                onClick={() => handleChangeBackground("readingBackground.main")}
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  backgroundColor: "readingBackground.main",
                  border: 1,
                  borderColor:
                    backgroundColor === "readingBackground.main"
                      ? "success.main"
                      : "text.main",
                  borderRadius: "50%",
                  cursor: "pointer",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {backgroundColor === "readingBackground.main" && (
                  <CheckIcon color="success" />
                )}
              </Box>
            </Stack>

            {/* tùy chỉnh màu nền đọc */}
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Nền đọc
            </Typography>
            <Stack
              mb={5}
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                onClick={() => {
                  handleChangePaperColor("readingPaper.light");
                  handleChangeFontColor("sub.dark");
                }}
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  backgroundColor: "readingPaper.light",
                  border: 1,
                  borderColor:
                    paperColor === "readingPaper.light"
                      ? "success.main"
                      : "text.main",
                  borderRadius: "50%",
                  cursor: "pointer",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {paperColor === "readingPaper.light" && (
                  <CheckIcon color="success" />
                )}
              </Box>
              <Box
                onClick={() => {
                  handleChangePaperColor("readingPaper.dark");
                  handleChangeFontColor("text.light");
                }}
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  backgroundColor: "readingPaper.dark",
                  border: 1,
                  borderColor:
                    paperColor === "readingPaper.dark" ? "success.main" : "",
                  borderRadius: "50%",
                  cursor: "pointer",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {paperColor === "readingPaper.dark" && (
                  <CheckIcon color="success" />
                )}
              </Box>
              <Box
                onClick={() => {
                  handleChangePaperColor("readingPaper.main");
                  handleChangeFontColor("sub.dark");
                }}
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  backgroundColor: "readingPaper.main",
                  border: 1,
                  borderColor:
                    paperColor === "readingPaper.main"
                      ? "success.main"
                      : "text.main",
                  borderRadius: "50%",
                  cursor: "pointer",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {paperColor === "readingPaper.main" && (
                  <CheckIcon color="success" />
                )}
              </Box>
            </Stack>

            {/* tùy chỉnh màu chữ */}
            {/*<Typography variant="h5" fontWeight={600} gutterBottom>
              Màu chữ
                </Typography>*/}

            {/* độ rộng khung đọc */}
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Khung đọc
            </Typography>
            <Stack mb={5} spacing={2} direction="row" alignItems="center">
              <Typography variant="caption">640</Typography>
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
              <Typography variant="caption">1040</Typography>
            </Stack>

            {/* tủy chỉnh font chữ */}
            <Typography variant="h5" fontWeight={600} gutterBottom>
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
            <Typography variant="h5" fontWeight={600} gutterBottom>
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
