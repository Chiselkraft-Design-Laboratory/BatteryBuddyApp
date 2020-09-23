import React from "react";
import withDeviceManager from "../../../core/devicemanager";
import { Button } from "@material-ui/core";
import DefaultTile from "../../helpers/defaultTile";

const DiagnosticsPage = ({ device }) => {
  // const cl = useStyles();
  console.log("report", device.report);
  return (
    <DefaultTile wide title={"Diagnostics"}>
      <Button onClick={device.runDiagnostics}>Run Diagnostics</Button>
    </DefaultTile>
  );
};

export default withDeviceManager(React.memo(DiagnosticsPage));
