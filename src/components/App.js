import React, { Component, Fragment } from "react";

import BaseLayout from "./layouts";
import CenterSection from "./layouts/sections/centerSection";
import DefaultSection from "./layouts/sections/defaultSection";

import NavigationBlock from "./blocks/navigation";
import FooterBlock from "./blocks/footer";
import SidepanelBlock from "./blocks/sidepanel";

import {
  DashboardPage,
  AnalyticsPage,
  DiagnosticsPage,
  SettingsPage,
} from "./pages";

class BatteryBuddyApp extends Component {
  render() {
    return (
      <Fragment>
        <BaseLayout navigation={<NavigationBlock />} footer={<FooterBlock />}>
          <DefaultSection sidepanel={<SidepanelBlock />}>
            <DashboardPage>dashboard</DashboardPage>
          </DefaultSection>
        </BaseLayout>
      </Fragment>
    );
  }
}

export default BatteryBuddyApp;
