import range from "lodash/range";
import * as time from "d3-time";
import { metricsOptions as options } from "../constants/preferences";

const logToMetrics = (prev, log) => {
  // console.log("log", { prev, log });
  if (prev !== undefined) {
    return {
      cellVoltage: parseBarMetrics(log.cellVoltage),
      packCurrent: parseTimeMetrics(
        prev.packCurrent,
        log.timestamp,
        log.packCurrent
      ),
      packTemperature: parseTimeMetrics(
        prev.packTemperature,
        log.timestamp,
        log.packTemperature
      ),
      SoC: parseTimeMetrics(prev.SoC, log.timestamp, log.SoC),
    };
  } else {
    return {
      cellVoltage: [{ x: "", y: null }],
      packCurrent: initialTimeMetrics(options.currentMtericsBuffer),
      packTemperature: initialTimeMetrics(options.temperatureMetricsBuffer),
      SoC: initialTimeMetrics(options.SoCMetricsBuffer),
    };
  }
};

function parseBarMetrics(array) {
  let metrics = [];
  if (array) {
    array.forEach((value, index) => {
      metrics.push({ x: String(index + 1), y: value });
    });
  } else {
    metrics = [{ x: 0, y: 0 }];
  }

  return metrics;
}

function parseTimeMetrics(prev, timestamp, value) {
  let metrics = [];
  if (prev && timestamp && value) {
    metrics = prev.slice(1);
    metrics.push({ x: time.timeMillisecond(timestamp), y: value });
  } else return prev;
  return metrics;
}

function initialTimeMetrics(bufferSize) {
  let dummy = [];
  let t = new Date().getTime();
  range(bufferSize).forEach((i) => {
    dummy.push({ x: time.timeMillisecond.offset(t, i * 500), y: null });
  });
  return dummy;
}

export default logToMetrics;