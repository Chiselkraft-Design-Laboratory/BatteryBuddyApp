import React from "react";
import { linkMode } from "../constants/typedef";

export class DeviceManager extends React.Component {
  state = {
    linked: linkMode.NONE,
  };

  conncect = (mode) => {
    this.setState({
      linked: linkMode.CANBUS,
    });
  };

  disconncect = (mode) => {
    this.setState({
      linked: linkMode.NONE,
    });
  };

  probe = (mode) => {
    return true;
  };

  read = () => {
    return null;
  };

  write = () => {
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
