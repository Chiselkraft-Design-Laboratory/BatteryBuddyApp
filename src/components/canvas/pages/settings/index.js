import React from "react";
// import { makeStyles } from "@material-ui/core";
import withDeviceManager from "../../../core/devicemanager";
import SettingsDisclaimer from "./disclaimer";
// const useStyles = makeStyles(
//   (theme) => ({
//     root: {},
//   }),
//   { index: 1 }
// );

const SettingsPage = ({ device }) => {
  // const cl = useStyles();
  const { settings } = device;
  console.log("device", device.settings);
  return settings.acceptDisclaimer ? null : (
    <SettingsDisclaimer onAccept={device.approveDisclaimer} />
  );
};

export default withDeviceManager(SettingsPage);
