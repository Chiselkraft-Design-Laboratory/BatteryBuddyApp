import React from "react";
import { Button } from "@material-ui/core";
// constants
import { linkMode } from "./constants/typedef";
// context
import withDeviceManager from "./core/devicemanager";
// canvas
import BaseLayout from "./canvas/layouts/baselayout";

export class BatteryBuddyApp extends React.Component {
  componentDidMount() {
    if (!this.props.device.linked) {
      // this.props.device.connect(linkMode.CANBUS);
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
          "page"
        ) : (
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={device.connect}
            >
              connect
            </Button>
          </div>
        )}
      </BaseLayout>
    );
  }
}

export default withDeviceManager(BatteryBuddyApp);
