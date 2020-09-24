import React from "react";
import logToMetrics from "./parseMetrics";
import { linkMode } from "../constants/typedef";
import * as dummy from "../dummies/dataStream";
import { metricsOptions } from "../constants/preferences";

export class DeviceManager extends React.Component {
  state = {
    linked: linkMode.NONE,
    spec: dummy.spec,
    log: {
      timestamp: 0,
      cellVoltage: [],
      packVoltage: 0,
      packCurrent: 0,
      packTemperature: 0,
      SoC: 0,
      SoH: 0,
    },
    metrics: logToMetrics(),

    enableLog: false,
    dataLog: [],

    report: {},
    settings: {},
  };

  conncect = (mode) => {
    // replace with routines
    setTimeout(() => {
      this.setState({
        linked: mode,
      });
    }, 3000);
  };

  disconncect = (mode) => {
    // replace with routines
    this.setState({
      linked: linkMode.NONE,
    });
  };

  toggleLogMode = () => {
    this.setState({ enableLog: !this.state.enableLog, dataLog: [] });
  };

  exportLog = () => {
    var content = JSON.stringify(this.state.dataLog);
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var currentDate = date + "/" + month + "/" + year;

    var name =
      this.state.spec.make +
      "_" +
      this.state.spec.serial +
      "_log_" +
      currentDate;
    var atag = document.createElement("a");
    var file = new Blob([content], { type: "text/plain" });
    atag.href = URL.createObjectURL(file);
    atag.download = name;
    atag.click();
  };
  exportReport = () => {
    var content = JSON.stringify(this.state.report);
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var currentDate = date + "/" + month + "/" + year;

    var name =
      this.state.spec.make +
      "_" +
      this.state.spec.serial +
      "_diagnosticsreport_" +
      currentDate;
    var atag = document.createElement("a");
    var file = new Blob([content], { type: "text/plain" });
    atag.href = URL.createObjectURL(file);
    atag.download = name;
    atag.click();
  };

  runDiagnostics = () => {
    // dummy
    this.setState({
      report: dummy.nextDiagnostics(),
    });
  };

  probe = (mode) => {
    // pass dummy datastream
    const prevmetrics = this.state.metrics;
    const tempdatalog = this.state.dataLog;

    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    const newlog = dummy.nextLog(); // feed data here
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    // log data if needed
    if (this.state.enableLog) {
      tempdatalog.push(newlog);
    }

    this.setState({
      log: newlog,
      metrics: logToMetrics(prevmetrics, newlog),
      dataLog: tempdatalog,
    });
  };
}

// context area

const DeviceManagerContext = React.createContext({
  linked: linkMode.NONE,
  connect: (linked) => {},
  disconnect: (linked) => {},
  probe: () => {},
  toggleLogMode: () => {},
  exportLog: () => {},
  runDiagnostics: () => {},
  exportReport: () => {},
});

export class DeviceManagerProvider extends DeviceManager {
  componentDidMount() {
    if (this.state.linked) {
      this.interval = setInterval(
        () => this.probe(),
        metricsOptions.updateInterval
      );
    }
  }

  componentDidUpdate() {
    if (this.state.linked && !this.interval) {
      this.interval = setInterval(
        () => this.probe(),
        metricsOptions.updateInterval
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { children } = this.props;
    return (
      <DeviceManagerContext.Provider
        value={{
          ...this.state,
          connect: this.conncect,
          disconnect: this.disconncect,
          probe: this.probe,
          toggleLogMode: this.toggleLogMode,
          exportLog: this.exportLog,
          runDiagnostics: this.runDiagnostics,
          exportReport: this.exportReport,
        }}
      >
        {children}
      </DeviceManagerContext.Provider>
    );
  }
}

const withDeviceManager = (Component) => (props) => (
  <DeviceManagerContext.Consumer>
    {(device) => <Component {...props} device={device} />}
  </DeviceManagerContext.Consumer>
);

export default withDeviceManager;
