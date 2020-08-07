import React, { Component, Fragment } from "react";

import BaseLayout from "./layouts";
import CenterSection from "./layouts/sections/centerSection";
import DefaultSection from "./layouts/sections/defaultSection";

export class BatteryBuddyApp extends Component {
  render() {
    return (
      <Fragment>
        <BaseLayout navigation="navigation" footer="footer">
          <DefaultSection sidepanel="sidepanel">..page</DefaultSection>
        </BaseLayout>
      </Fragment>
    );
  }
}

export default BatteryBuddyApp;
