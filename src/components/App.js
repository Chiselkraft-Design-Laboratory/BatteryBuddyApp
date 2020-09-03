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
import Notify from "./canvas/notify";

class BatteryBuddyApp extends React.Component {
  componentDidMount() {
    if (!this.props.device.linked) {
      // this.props.device.connect();
    }
  }
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
            {/* <SideBar />
            <Suspense fallback={<div>Loading...</div>}>
              <PageProvider />
            </Suspense> */}
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
