import {
  grey,
  pink,
  green,
  red,
  amber,
  purple,
  indigo,
  blue,
  teal,
  deepOrange,
  lightBlue,
} from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    // primary: {
    //   light: indigo[400],
    //   main: indigo[500],
    //   dark: indigo[700],
    // },

    secondary: {
      light: "#212531",
      main: "#222731",
      dark: "#1F212D",
    },

    notification: {
      light: "#ba68c8",
      main: "#9c27b0",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },

    text: {
      light: grey[300],
      main: grey[500],
      dark: grey[600],
    },

    success: {
      main: green["A700"],
    },

    error: {
      main: red[500],
    },

    background: {
      paper: "#fff",
      default: "#fff",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 480, //default: 600
      md: 600, //default: 960
      lg: 1000, //default: 1280
      xl: 1360, //default: 1920
    },
  },
});

export default lightTheme;
