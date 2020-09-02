import React from "react";

// constants
import { linkMode } from "./constants/typedef";
// context
import withDeviceManager from "./core/devicemanager";
// canvas
import BaseLayout from "./canvas/layouts/baselayout";
import DashboardPage from "./canvas/pages/dashboard";

class BatteryBuddyApp extends React.Component {
  componentDidMount() {
    if (!this.props.device.linked) {
      this.props.device.connect(linkMode.CANBUS);
    }
  }
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
          "connect wizard"
        )}
      </BaseLayout>
    );
  }
}

export default withDeviceManager(BatteryBuddyApp);
