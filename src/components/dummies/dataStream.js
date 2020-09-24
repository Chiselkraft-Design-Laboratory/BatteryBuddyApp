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
  make: "Vecmocon",
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
  let result = [];

  range(16).forEach((index) => {
    result.push({ ["parameter" + (index + 1)]: true });
  });

  if (type === undefined || type > 2 || type < 0) {
    type = parseInt(randomize(0, 2, 1));
  }
  console.log("type", type);
  switch (type) {
    case 1:
      range(4).forEach(() => {
        const rand = parseInt(randomize(0, 15, 2));
        result[rand] = { ["parameter" + (rand + 1)]: false };
      });
      return {
        health: "moderate",
        index: randomize(54, 65, 2),
        cycles: parseInt(randomize(500, 700, 3)),
        error: parseInt(randomize(0, 3, 1)),
        warning: parseInt(randomize(1, 4, 1)),
        data: result,
      };
    case 2:
      range(8).forEach(() => {
        const rand = parseInt(randomize(0, 15, 2));
        result[rand] = { ["parameter" + (rand + 1)]: false };
      });
      return {
        health: "critical",
        index: randomize(20, 38, 2),
        cycles: parseInt(randomize(1800, 2200, 4)),
        error: parseInt(randomize(4, 8, 1)),
        warning: parseInt(randomize(2, 6, 1)),
        data: result,
      };
    default:
      return {
        health: "Excellent",
        index: randomize(90, 100, 3),
        cycles: parseInt(randomize(80, 150, 3)),
        error: 0,
        warning: 0,
        data: result,
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
