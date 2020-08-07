import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { CssBaseline } from "@material-ui/core";
import ThemeEngine from "./components/themeEngine";

import BatteryBuddyApp from "./components/App";

ReactDOM.render(
  <ThemeEngine>
    <CssBaseline />
    <BatteryBuddyApp />
  </ThemeEngine>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
