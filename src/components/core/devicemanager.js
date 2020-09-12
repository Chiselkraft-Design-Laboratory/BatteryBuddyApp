import React from "react";
import logToMetrics from "./parseMetrics";
import { linkMode } from "../constants/typedef";
import * as dummy from "../dummies/dataStream";
import { metricsOptions } from "../constants/preferences";

export class DeviceManager extends React.Component {
  state = {
    linked: linkMode.CANBUS,
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

  probe = (mode) => {
    // pass dummy datastream
    const prevmetrics = this.state.metrics;

    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    const newlog = dummy.nextLog(); // feed data here
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    this.setState({
      log: newlog,
      metrics: logToMetrics(prevmetrics, newlog),
    });
  };

  read = () => {
    // replace with routines
    return null;
  };

  write = () => {
    // replace with routines
    return null;
  };
}

// context area

const DeviceManagerContext = React.createContext({
  linked: linkMode.NONE,
  connect: (linked) => {},
  disconnect: (linked) => {},
  probe: () => {},
  read: () => {},
  write: () => {},
});

export class DeviceManagerProvider extends DeviceManager {
  componentDidMount() {
    this.interval = setInterval(
      () => this.probe(),
      metricsOptions.updateInterval
    );
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
          read: this.read,
          write: this.write,
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
