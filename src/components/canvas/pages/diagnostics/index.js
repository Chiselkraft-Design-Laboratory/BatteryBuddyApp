import React from "react";
import withDeviceManager from "../../../core/devicemanager";
import { Button, makeStyles } from "@material-ui/core";
import DiagnosticsTile from "./diagnosticstile";
import DiagnosticsSummary from "./diagnosticssummary";
import DiagnosticsReport from "./diagnosticsreport";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(1.5, 4),
    borderRadius: theme.spacing(0.5),
    background: theme.palette.T4,
    color: theme.palette.D2,
    "&:hover": {
      background: theme.palette.T4,
      opacity: 0.8,
    },
  },
}));

const DiagnosticsPage = ({ device }) => {
  const cl = useStyles();

  const { report } = device;

  const accent = report.index
    ? report.index > 65
      ? 1
      : report.index > 38
      ? 0
      : -1
    : undefined; // critical -1 | moderate 0 | excellent 1

  const summary = Object.keys(report).reduce((object, key) => {
    if (key !== "data") {
      object[key] = report[key];
    }
    return object;
  }, {});

  return (
    <DiagnosticsTile>
      <DiagnosticsSummary
        accent={accent}
        summary={summary}
        onRetry={device.runDiagnostics}
        onSave={device.exportReport}
      />
      <DiagnosticsReport
        data={device.report.data}
        fallback={
          <Button classes={{ root: cl.button }} onClick={device.runDiagnostics}>
            run diagnostics
          </Button>
        }
      />
    </DiagnosticsTile>
  );
};

export default withDeviceManager(React.memo(DiagnosticsPage));
