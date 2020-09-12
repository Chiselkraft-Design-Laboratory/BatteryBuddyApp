// range control
const cellCount = 20;
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
