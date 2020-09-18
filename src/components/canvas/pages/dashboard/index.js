import React from "react";
import withDeviceManager from "../../../core/devicemanager";
import CellVoltageMetrics from "./metrics/cellvoltageMetrics";
import CurrentMetrics from "./metrics/currentMterics";
import TemperatureMetrics from "./metrics/temperatureMetrics";
import SoCMetrics from "./metrics/socMetics";

const DashboardPage = ({ device }) => {
  const live = device.metrics;

  return (
    <React.Fragment>
      <CellVoltageMetrics feed={live.cellVoltage} />
      <CurrentMetrics feed={[{ id: "Current", data: live.packCurrent }]} />
      <TemperatureMetrics feed={live.zoneTemperatures} />
      <SoCMetrics feed={[{ id: "SoC", data: live.SoC }]} />
    </React.Fragment>
  );
};

export default withDeviceManager(DashboardPage);
