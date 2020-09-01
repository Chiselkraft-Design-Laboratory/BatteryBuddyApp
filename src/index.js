import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import BatteryBuddyApp from "./components/App";

import ThemeWorks from "./components/themeworks";
import { DeviceManagerProvider } from "./components/core/devicemanager";

ReactDOM.render(
  <ThemeWorks>
    <DeviceManagerProvider>
      <BatteryBuddyApp />
    </DeviceManagerProvider>
  </ThemeWorks>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
