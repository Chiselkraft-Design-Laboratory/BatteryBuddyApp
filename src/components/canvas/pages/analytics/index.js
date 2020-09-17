import React from "react";
import * as palette from "../../../themeworks/darkspaceUI/swatch";
import withDeviceManager from "../../../core/devicemanager";
import AnalyticsTile from "./analyticstile";
import AnalyticsHeader from "./analyticsheader";
import AnalyticsMetrics from "./analyticsmetrics";
import AnalyticsLog from "./analyticslog";
import AnalyticsFooter from "./analyticsfooter";

const AnalyticsPage = ({ device }) => {
  // feed prep
  const live = device.metrics;

  const feed = [
    { color: palette.lite.X1, id: "SoC", data: live.SoC },
    { color: palette.tone.T5, id: "Temperature", data: live.packTemperature },
    { color: palette.tone.T4, id: "Current", data: live.packCurrent },
    { color: palette.tone.T2, id: "Voltage", data: live.packVoltage },
  ];
  const [split, setSplit] = React.useState(false);

  // functions
  const toggleSplit = () => {
    setSplit(!split);
  };

  return (
    <AnalyticsTile
      footer={
        <AnalyticsFooter
          logging={device.enableLog}
          toggleLog={device.toggleLogMode}
          saveLog={device.exportLog}
        />
      }
    >
      {/* header */}
      <AnalyticsHeader split={split} toggleSplit={toggleSplit} />
      {/* metrics */}
      <AnalyticsMetrics split={split} feed={feed} />
      {split && <AnalyticsMetrics split={split} feed={feed} />}
      {/* log */}
      {device.enableLog && <AnalyticsLog data={device.dataLog} />}
    </AnalyticsTile>
  );
};

export default withDeviceManager(AnalyticsPage);
