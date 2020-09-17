import React from "react";
import * as palette from "../../../themeworks/darkspaceUI/swatch";

import withDeviceManager from "../../../core/devicemanager";
import AnalyticsTile from "./analyticstile";
import AnalyticsHeader from "./analyticsheader";
import AnalyticsMetrics from "./analyticsmetrics";
import AnalyticsLog from "./anakyticslog";
import AnalyticsFooter from "./analyticsfooter";

const AnalyticsPage = ({ device }) => {
  const live = device.metrics;
  const feed = [
    { color: palette.lite.X1, id: "SoC", data: live.SoC },
    { color: palette.tone.T5, id: "Temperature", data: live.packTemperature },
    { color: palette.tone.T4, id: "Current", data: live.packCurrent },
    { color: palette.tone.T2, id: "Voltage", data: live.packVoltage },
  ];
  const [split, setSplit] = React.useState(false);
  const [logging, setLogging] = React.useState(false);

  // functions
  const toggleSplit = () => {
    setSplit(!split);
  };

  const toggleLog = () => {
    setLogging(!logging);
  };

  const saveLog = () => {
    return null;
  };

  return (
    <AnalyticsTile
      footer={
        <AnalyticsFooter
          logging={logging}
          toggleLog={toggleLog}
          saveLog={saveLog}
        />
      }
    >
      {/* header */}
      <AnalyticsHeader split={split} toggleSplit={toggleSplit} />
      {/* metrics */}
      <AnalyticsMetrics split={split} feed={feed} />
      {split && <AnalyticsMetrics split={split} feed={feed} />}
      {/* log */}
      {logging && <AnalyticsLog />}
    </AnalyticsTile>
  );
};

export default withDeviceManager(AnalyticsPage);
