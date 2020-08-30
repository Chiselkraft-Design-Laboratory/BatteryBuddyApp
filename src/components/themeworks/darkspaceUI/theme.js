import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { dark, lite, tone, gradient } from "./swatch";

let darkspaceUI = createMuiTheme({
  palette: {
    type: "dark",

    background: {
      default: dark.X2,
      paper: dark.X1,
    },

    text: {
      primary: lite.X1,
      secondary: lite.X2,
      disabled: lite.X3,
    },

    info: { main: lite.X3 },
    success: { main: tone.T3 },
    warning: { main: tone.T4 },
    error: { main: tone.T5 },

    D1: dark.X1,
    D2: dark.X2,
    D3: dark.X3,
    D4: dark.X4,

    L1: lite.X1,
    L2: lite.X2,
    L3: lite.X3,

    T1: tone.T1,
    T2: tone.T2,
    T3: tone.T3,
    T4: tone.T4,
    T5: tone.T5,

    G1: gradient.G1,
    G2: gradient.G2,
  },
});

darkspaceUI = responsiveFontSizes(darkspaceUI);

export default darkspaceUI;
