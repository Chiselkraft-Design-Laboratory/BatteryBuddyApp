import React from "react";

// constants
import { linkMode } from "./constants/typedef";
// context
import withDeviceManager from "./core/devicemanager";
// canvas
import BaseLayout from "./canvas/layouts/baselayout";
import DashboardPage from "./canvas/pages/dashboard";
import ConnectWizard from "./canvas/connectwizard";

class BatteryBuddyApp extends React.Component {
  render() {
    const { device } = this.props;
    console.log("devicemanager", device);
    return (
      <BaseLayout
        navigation="navigation"
        footer="footer"
        wizard={!device.linked}
      >
        {device.linked ? (
          <React.Fragment>
            <DashboardPage />
          </React.Fragment>
        ) : (
          <ConnectWizard handleConnect={device.connect} />
        )}
      </BaseLayout>
    );
  }
}

export default withDeviceManager(BatteryBuddyApp);
