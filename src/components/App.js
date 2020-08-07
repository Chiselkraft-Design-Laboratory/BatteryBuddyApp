import React, { Component, Fragment } from "react";

import BaseLayout from "./layouts";
import CenterSection from "./layouts/sections/centerSection";
import DefaultSection from "./layouts/sections/defaultSection";

import NavigationBlock from "./blocks/navigation";

export class BatteryBuddyApp extends Component {
  render() {
    return (
      <Fragment>
        <BaseLayout navigation={<NavigationBlock />} footer="footer">
          <DefaultSection sidepanel="sidepanel">..page</DefaultSection>
        </BaseLayout>
      </Fragment>
    );
  }
}

export default BatteryBuddyApp;
