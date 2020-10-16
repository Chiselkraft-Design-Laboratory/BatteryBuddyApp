import React, { Suspense } from "react";
// context
import withDeviceManager from "./core/devicemanager";
// canvas
import BaseLayout from "./canvas/layouts/baselayout";
import PageProvider from "./canvas/pages";
import ConnectWizard from "./canvas/connectwizard";
import SideBar from "./canvas/sidebar";
import Footer from "./canvas/footer";
import NavBar from "./canvas/navbar";
// import Notify from "./canvas/notify";

class BatteryBuddyApp extends React.Component {
  render() {
    const { device } = this.props;

    return (
      <BaseLayout
        navigation={<NavBar showlinks={device.linked} />}
        footer={<Footer />}
        wizard={!device.linked}
      >
        {device.linked ? (
          <React.Fragment>
            <SideBar
              spec={device.spec}
              feed={device.log}
              disconnect={device.disconnect}
              isConnected={device.progress}
            />
            <Suspense fallback={<div>Loading...</div>}>
              <PageProvider />
            </Suspense>
          </React.Fragment>
        ) : (
          <ConnectWizard connect={device.connect} />
        )}
        {/* <Notify message={"this is how notifications will appear"} /> */}
      </BaseLayout>
    );
  }
}

export default withDeviceManager(BatteryBuddyApp);
