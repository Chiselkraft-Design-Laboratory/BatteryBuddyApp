import range from "lodash/range";
import * as time from "d3-time";
import { metricsOptions as options } from "../constants/preferences";

const logToMetrics = (prev, log) => {
  console.log("log", { prev, log });
  if (prev !== undefined) {
    return {
      cellVoltage: parseBarMetrics(log.cellVoltage),
      packVoltage: parseTimeMetrics1(
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
        prev.zoneTemperatures,
        "temprature",
        7,
        log.timestamp,
        log.zoneTemperatures
      ),
      voltages:parseArrTimeMetrics1(
        prev.voltages,
        "cell",
        14,
        log.timestamp,
        log.voltages
      ),
     
    };
  } else {
    return {
      cellVoltage: [{ x: "", y: null }],
      packVoltage: initialTimeMetrics(options.metricsBuffer),
      packCurrent: initialTimeMetrics(options.metricsBuffer),
      packTemperature: initialTimeMetrics(options.metricsBuffer),
      SoC: initialTimeMetrics(options.metricsBuffer),
      zoneTemperatures: initialArrTimeMetrics("temprature", 7, options.metricsBuffer),
      voltages: initialArrTimeMetrics("cell", 14, options.metricsBuffer),

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

  // console.log('parseTime',prev,timestamp,value)
  let metrics = [];
  if (prev && timestamp && value) {
    metrics = prev.slice(1);
    metrics.push({ x: time.timeMillisecond(timestamp), y: value });
  } else return prev;
  return metrics;
}


function parseTimeMetrics1(prev, timestamp, value) {

  let metrics = [];
  if (prev && timestamp && value) {
    metrics = prev.slice(1);
    metrics.push({ x: time.timeMillisecond(timestamp), y: parseFloat(value)/1000 });
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
      id: (suffix) + (index + 1),
      data: parseTimeMetrics(prev[index].data, timestamp, Math.abs(value[index]/10)+getRandomInt(10))


    },
    
    );
  
  });

  return arr;
}


function parseArrTimeMetrics1(prev, suffix, size, timestamp, value) {
  let arr = [];
console.log('livv',prev)

  range(size).forEach((index) => {

    arr.push({
      id: (suffix) + (index + 1),
      data: parseTimeMetrics(prev[index].data, timestamp,(value[index]/1000))


    },
    
    );
  
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
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default logToMetrics;
