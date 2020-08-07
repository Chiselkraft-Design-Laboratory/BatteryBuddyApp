import React, { Component, Fragment } from "react";

import BaseLayout from "./layouts";

export class BatteryBuddyApp extends Component {
  render() {
    return (
      <Fragment>
        <BaseLayout navigation="navigation" footer="footer">
          section
        </BaseLayout>
      </Fragment>
    );
  }
}

export default BatteryBuddyApp;
