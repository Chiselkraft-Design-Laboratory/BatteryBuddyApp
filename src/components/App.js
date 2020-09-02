import React, { Suspense } from "react";

// context
import withDeviceManager from "./core/devicemanager";
// canvas
import BaseLayout from "./canvas/layouts/baselayout";
import PageProvider from "./canvas/pages";
import ConnectWizard from "./canvas/connectwizard";
import SideBar from "./canvas/sidebar";
import Footer from "./canvas/footer";

class BatteryBuddyApp extends React.Component {
  render() {
    const { device } = this.props;
    console.log("devicemanager", device);
    return (
      <BaseLayout
        navigation="navigation"
        footer={<Footer />}
        wizard={!device.linked}
      >
        {device.linked ? (
          <React.Fragment>
            <SideBar />
            <Suspense fallback={<div>Loading...</div>}>
              <PageProvider />
            </Suspense>
          </React.Fragment>
        ) : (
          <ConnectWizard handleConnect={device.connect} />
        )}
      </BaseLayout>
    );
  }
}

export default withDeviceManager(BatteryBuddyApp);
