import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

// custom app theme
import darkspaceUI from "./darkspaceUI/theme";

// theme customizations and overrides
const theme = darkspaceUI;

// global PROPS resets
theme.props = {};

// global CSS resets
theme.overrides = {
  MuiCssBaseline: {
    "@global": {
      html: {
        WebkitFontSmoothing: "auto",
      },
    },
  },

  MuiPaper: {
    rounded: {
      borderRadius: theme.spacing(2),
    },
  },
  MuiButton: {
    root: {},
    text: {
      padding: theme.spacing(1, 4),
      textTransform: "capitalize",
    },
    label: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center",
    },
    disabled: {
      color: theme.palette.D4,
      fill: theme.palette.D4,
      background: theme.palette.D3,
    },
  },
};

const ThemeWorks = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
export default ThemeWorks;

// © 2020 • Chiselkraft Design Laboratory Pvt Ltd
