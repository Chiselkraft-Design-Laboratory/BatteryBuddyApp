import range from "lodash/range";

// range control
const cellCount = 16;
const minCellVolt = 3.3;
const maxCellVolt = 3.8;

const minVolt = 46;
const maxVolt = 52;
const minCurrent = -20;
const maxCurrent = 20;

const minTemperature = 32.5;
const maxTemperature = 40.5;

const minSoC = 80.0;
const maxSoC = 88.0;

const minSoH = 65.0;
const maxSoH = 68.0;
// ---------------------------

export const spec = {
  make: "Napino",
  model: "X Series 458n",
  serial: "XYZQ N458 69468092",
  mfd: "2020-06-24",

  capacity: "3200AH",
  voltage: "48V",

  cellMake: "LICHEN",
  cellChemistry: "Li-Polymer",
  cellType: "CYL",
  cellConfig: "13 S / 4 P",
  cellPacks: 16,
};

export const nextLog = () => {
  const date = new Date().getTime();
  return {
    timestamp: date,
    cellVoltage: cellvoltage(),
    packVoltage: randomize(minVolt, maxVolt, 4),
    packCurrent: randomize(minCurrent, maxCurrent, 4),
    packTemperature: randomize(minTemperature, maxTemperature, 3),
    SoC: randomize(minSoC, maxSoC, 3),
    SoH: randomize(minSoH, maxSoH, 3),
  };
};

export const nextDiagnostics = (type) => {
  let report = [];

  report.push({ CELLS_ADC: 0 });
  report.push({ THERM_ADC: 0 });
  report.push({ SHUNT_ADC: 0 });
  report.push({ STATUS_FUSE: 0 });
  report.push({ MOSFET_CHARGE: 0 });
  report.push({ SHUNT_CONN: 0 });
  report.push({ CELLS_CONN: 0 });
  report.push({ THERM_CONN: 0 });
  report.push({ CELL_FAULT_FUNC: 0 });
  report.push({ THERM_FAULT_FUNC: 0 });
  report.push({ SHUNT_FAULT_FUNC: 0 });
  report.push({ CELL_FAULT_FUNC: 0 });

  if (type === undefined || type > 2 || type < 0) {
    type = parseInt(randomize(0, 2, 1));
  }

  switch (type) {
    case 1:
      range(4).forEach(() => {
        const rand = parseInt(randomize(0, 11, 2));
        report[rand] = { [Object.keys(report[rand])[0]]: true };
      });
      return {
        health: "moderate",
        index: randomize(54, 65, 2),
        cycles: parseInt(randomize(500, 700, 3)),
        error: parseInt(randomize(0, 3, 1)),
        warning: parseInt(randomize(1, 4, 1)),
        data: report,
      };
    case 2:
      range(8).forEach(() => {
        const rand = parseInt(randomize(0, 11, 2));
        report[rand] = { [Object.keys(report[rand])[0]]: true };
      });
      return {
        health: "critical",
        index: randomize(20, 38, 2),
        cycles: parseInt(randomize(1800, 2200, 4)),
        error: parseInt(randomize(4, 8, 1)),
        warning: parseInt(randomize(2, 6, 1)),
        data: report,
      };
    default:
      return {
        health: "Excellent",
        index: randomize(90, 100, 3),
        cycles: parseInt(randomize(80, 150, 3)),
        error: 0,
        warning: 0,
        data: report,
      };
  }
};

function cellvoltage() {
  let cellvolt = [];
  for (var i = 0; i < cellCount; i++) {
    cellvolt.push(randomize(minCellVolt, maxCellVolt, 4));
  }
  return cellvolt;
}

function randomize(min, max, decimal) {
  return parseFloat((min + Math.random() * (max - min)).toPrecision(decimal));
}
