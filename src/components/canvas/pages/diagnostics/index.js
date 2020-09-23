import React from "react";
import withDeviceManager from "../../../core/devicemanager";
import { Button } from "@material-ui/core";
import DiagnosticsTile from "./diagnosticstile";
import DiagnosticsSummary from "./diagnosticssummary";
import DiagnosticsReport from "./diagnosticsreport";

const DiagnosticsPage = ({ device }) => {
  // const cl = useStyles();

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
          <Button onClick={device.runDiagnostics}>run diagnostics</Button>
        }
      />
    </DiagnosticsTile>
  );
};

export default withDeviceManager(React.memo(DiagnosticsPage));
