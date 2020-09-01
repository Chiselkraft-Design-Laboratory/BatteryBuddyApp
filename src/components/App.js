import React from "react";
import withDeviceManager from "./core/devicemanager";

export class BatteryBuddyApp extends React.Component {
  render() {
    const { device } = this.props;
    console.log("devicemanager", device);
    return <React.Fragment></React.Fragment>;
  }
}

export default withDeviceManager(BatteryBuddyApp);
