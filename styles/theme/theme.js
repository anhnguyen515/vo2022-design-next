import {
  blue,
  blueGrey,
  green,
  grey,
  indigo,
  orange,
  pink,
  teal,
} from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "3rem",
          fontWeight: 700,
        },
      },
    },
  },

  typography: {
    fontFamily: [
      "Quicksand",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
      "serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
    ].join(", "),
  },

  palette: {
    mode: "light",
    // primary: {
    //   light: indigo[400],
    //   main: indigo[500],
    //   dark: indigo[700],
    // },

    // secondary: {
    //   light: "#F6F7FC",
    //   main: "#222731",
    //   dark: "#1F212D",
    // },
    primary: {
      light: blue[50],
      main: "#2E6FF3",
      dark: blue[800],
    },

    secondary: {
      light: pink[50],
      main: pink[500],
      dark: pink[700],
    },

    sub: {
      light: blueGrey[50],
      main: "#222731",
      dark: "#1F212D",
      contrastText: "#fff",
    },

    form: {
      light: indigo[50],
      main: indigo[500],
      dark: indigo[700],
      contrastText: "#fff",
    },

    notification: {
      light: "#ba68c8",
      main: "#9c27b0",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },

    like: {
      main: blue[500],
    },

    favorite: {
      main: pink[500],
    },

    happy: {
      main: orange[500],
    },

    sad: {
      main: teal["A700"],
    },

    text: {
      light: grey[100],
      main: grey[500],
      dark: grey[600],
    },

    readingBackground: {
      default: grey[100],
      dark: "#1F212D",
      yellow: "#DACFA1",
      blue: blue[200],
      pink: pink[200],
    },

    readingPaper: {
      default: "#fff",
      dark: "#222731",
      yellow: "#F1E8C2",
      blue: blue[100],
      pink: pink[100],
    },

    success: {
      main: green["A700"],
      // contrastText: "#fff",
    },

    background: {
      paper: "#fff",
      default: "#fff",
    },
  },

  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 480, //default: 600
  //     md: 600, //default: 960
  //     lg: 960, //default: 1280
  //     xl: 1280, //default: 1920
  //   },
  // },
});
