import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import * as Swatch from "./swatch";
import * as Font from "./fonts";
const darkspace = createMuiTheme({
  typography: {
    fontFamily: "Roboto, Arial",
    h1: {
      font: Font.DINProBlack,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [Font.Roboto],
      },
    },
  },
  palette: {
    type: "dark",

    background: {
      default: Swatch.DARK2,
      paper: Swatch.DARK,
    },

    text: {
      primary: Swatch.LITE,
      secondary: Swatch.LITE2,
      disabled: Swatch.LITE3,
    },

    info: { main: Swatch.LITE3 },
    success: { main: Swatch.TONE3 },
    warning: { main: Swatch.TONE4 },
    error: { main: Swatch.TONE5 },

    ui: {
      dark: Swatch.DARK,
      dark2: Swatch.DARK2,
      dark3: Swatch.DARK3,
      dark4: Swatch.DARK4,

      lite: Swatch.LITE,
      lite2: Swatch.LITE2,
      lite3: Swatch.LITE3,

      seagreen: Swatch.TONE1,
      yellowgreen: Swatch.TONE2,
      springgreen: Swatch.TONE3,
      yellowpantone: Swatch.TONE4,
      orangered: Swatch.TONE5,

      backdrop: Swatch.DARK2,
      paper: Swatch.DARK,
      success: Swatch.TONE3,
      warn: Swatch.TONE4,
      danger: Swatch.TONE5,
    },
  },
});

const DarkSpaceUI = (props) => {
  return <ThemeProvider theme={darkspace}>{props.children}</ThemeProvider>;
};

export default DarkSpaceUI;

// © 2020 • Chiselkraft Design Laboratory Pvt Ltd
