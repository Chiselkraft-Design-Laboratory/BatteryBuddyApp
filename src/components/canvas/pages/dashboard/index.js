import React from "react";
import withDeviceManager from "../../../core/devicemanager";
import CellVoltageMetrics from "./metrics/cellvoltageMetrics";
import CurrentMetrics from "./metrics/currentMterics";
import TemperatureMetrics from "./metrics/temperatureMetrics";
import SoCMetrics from "./metrics/socMetics";
import { color } from "../../../constants/preferences";

const DashboardPage = ({ device }) => {
  const live = device.metrics;

  live.zoneTemperatures.map((val, index) => {
    val.color = color[index];
  });


  return (
    <React.Fragment>
     <CellVoltageMetrics feed={live.cellVoltage} />
      <CurrentMetrics feed={[{ id: "Current", data: live.PackCurrent }]} />
      <TemperatureMetrics feed={live.zoneTemperatures} />
      <SoCMetrics feed={[{ id: "SoC", data: live.SOC }]} /> 
    </React.Fragment>
  );
};

export default withDeviceManager(DashboardPage);
