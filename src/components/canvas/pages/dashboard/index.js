import React from "react";

import CellVoltageMetrics from "./metrics/cellvoltageMetrics";
import CurrentMetrics from "./metrics/currentMterics";
import TemperatureMetrics from "./metrics/temperatureMetrics";
import SoCMetrics from "./metrics/socMetics";

const DashboardPage = () => {
  return (
    <React.Fragment>
      <CellVoltageMetrics />
      <CurrentMetrics />
      <TemperatureMetrics />
      <SoCMetrics />
    </React.Fragment>
  );
};

export default DashboardPage;
