import React from "react";
import withDeviceManager from "./core/devicemanager";
import { Button } from "@material-ui/core";

export class BatteryBuddyApp extends React.Component {
  render() {
    const { device } = this.props;
    console.log("devicemanager", device);
    return (
      <React.Fragment>
        <Button variant="contained" color="primary" onClick={device.connect}>
          connect
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={device.disconnect}
        >
          disconnect
        </Button>
      </React.Fragment>
    );
  }
}

export default withDeviceManager(BatteryBuddyApp);
