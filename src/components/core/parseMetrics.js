import range from "lodash/range";
import * as time from "d3-time";
import { metricsOptions as options } from "../constants/preferences";

const logToMetrics = (prev, log) => {
  // console.log("log", { prev, log });
  if (prev !== undefined) {
    return {
      cellVoltage: parseBarMetrics(log.cellVoltage),
      packVoltage: parseTimeMetrics(
        prev.packVoltage,
        log.timestamp,
        log.packVoltage
      ),
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
      zoneTemperatures: parseArrTimeMetrics(
        prev,
        "zone",
        7,
        log.timestamp,
        log.zoneTemperatures
      ),
    };
  } else {
    return {
      cellVoltage: [{ x: "", y: null }],
      packVoltage: initialTimeMetrics(options.metricsBuffer),
      packCurrent: initialTimeMetrics(options.metricsBuffer),
      packTemperature: initialTimeMetrics(options.metricsBuffer),
      SoC: initialTimeMetrics(options.metricsBuffer),
      zoneTemperatures: initialArrTimeMetrics("zone", 7, options.metricsBuffer),
    };
  }
};

function parseBarMetrics(array) {
  let metrics = [];
  if (array) {
    array.forEach((value, index) => {
      metrics.push({ x: String(index + 1), y: value/1000 });
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

function parseArrTimeMetrics(prev, suffix, size, timestamp, value) {
  let arr = [];
  range(size).forEach((index) => {
    arr.push({
      id: suffix + (index + 1),
      data: parseTimeMetrics(prev, timestamp, value[index]),
    });
  });
  return arr;
}

function initialArrTimeMetrics(suffix, size, buffer) {
  let arr = [];
  range(size).forEach((index) => {
    arr.push({ id: suffix + (index + 1), data: initialTimeMetrics(buffer) });
  });
  return arr;
}

export default logToMetrics;
