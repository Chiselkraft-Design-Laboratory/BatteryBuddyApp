import React from "react";
import * as time from "d3-time";
import logToMetrics from "./parseMetrics";
import { linkMode } from "../constants/typedef";
import * as dummy from "../dummies/dataStream";
import { metricsOptions,firstMenu, thirdMenu,fourthMenu } from "../constants/preferences";

var port;
var flcan = {};
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
      zones: 7,
      zoneTemperatures: [],
      voltages:[]
    },
    metrics: logToMetrics(),

    enableLog: false,
    dataLog: [],
    firstMenu:firstMenu,
    secondMenuData:['select Metrics'],
    analyticsData:['packCurrent','SoC'],
    tempZoneData:thirdMenu,
    tempData:[0],
    cellindex:[0],
    cellsData:fourthMenu,
    report: {},
    // IOT states >>>>>>>>>>>>>>>>>>>>>>>
    connectedButton: "",
    packet_rx: { metadata: "" },
    device: "",
    bms_info: {},
    productName: "",
    manufacturerName: "",
    serialNumber: "",
    voltages: "",
    tempratures: "",
    currents: "",
    Lltte_Endian:true,
    identity:false
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  };




exportMenuItem=(val1,val2)=>
{

var data =[...this.state.analyticsData]
var TempData=[...this.state.tempData]

console.log('eee',val2)
if(val2==='firstMenu')
{
 let id=this.firstMenu(val1);

var firstMenu=[...this.state.firstMenu]
  firstMenu.splice(val1,1)
  console.log('eee 1',data,id)

data.push(id);
data.shift()
this.setState({analyticsData:data,secondMenuData:firstMenu})

}
else if(val2==='secondMenuData')
{

 let id=this.secondMenu(val1)
data.shift()
data.push(id);

this.setState({analyticsData:data},()=>
 console.log('eeee 2',this.state.analyticsData,)
)
}
else if(val2==='tempZoneData')
{
var tempData=[...this.state.tempData];
tempData.push(val1);
tempData.shift();
this.setState({tempData:tempData})

}
else if(val2==='cellsData')
{
var cellindex=[...this.state.cellindex];
cellindex.push(val1);
cellindex.shift();
this.setState({cellindex:cellindex})

}
//cellsData
}
firstMenu(val1)
{
var firstMenu=[...this.state.firstMenu]
return  firstMenu[val1]

}
secondMenu(val1)
{

 var secondMenuData=[...this.state.secondMenuData]


return secondMenuData[val1]

}

  async next() {
    // let next = dataStream();
    // console.log("temprature", this.state);
    let date = new Date();
    date = time.timeSecond.offset(date);

    let log = {
      timestamp: date,
      cellVoltage: this.state.voltages.cellVoltages,
      packVoltage: this.state.currents.stackVoltage,
      packCurrent: this.state.currents.isenseCurrent,
      packTemperature: (parseInt(this.state.tempratures) + 600) / 10,
      SoC: parseInt(this.state.currents.SOC) + 5,
      SoH: this.state.currents.SOH,
      zones: 7,
      zoneTemperatures: this.state.tempratures,
      voltages:this.state.voltages.cellVoltages,
    };
    let prev = this.state.metrics;
    const tempdatalog = this.state.dataLog;
    // // log data if needed
   

   
    if (this.state.enableLog) {
      tempdatalog.push(log);
    }

    this.setState({
      log: log,
      metrics: logToMetrics(prev, log),
      dataLog: tempdatalog,


    });
  }

  conncect = (mode) => {
    console.log("zone", this.state.zoneTemperatures);
    if (this.state.linked === 0) {
      console.log("here on clickbus", port);

      flcan.requestPort().then((selectedPort) => {
        console.log("selcetd port", selectedPort);

        port = selectedPort;
        console.log("port in click", port);

        this.setState(
          {
            specs: {
              model: port.device_.productName,
              make: port.device_.manufacturerName,
              serial: port.device_.serialNumber.toString(16),
            },
          },
          () => {
            console.log("here connect top", port);
            try {
              flcan.connect().then(() => {
                console.log("porttted", port);
                port.onReceive = (data) => {

                  try {
                    var canid = data.metadata.getUint32(4, this.state.Lltte_Endian); //?little endian
                  } catch (err) {
                    return;
                  }
            
                  if ((canid & 0x00ffff) !== 0xff33) {
                    if ((canid & 0x00ffff) === 0xfffc) {
                      console.log("Heartbeat!");
                    } else {
                      console.log("canId",canid);
                      console.log(canid.toString(16));
                    }
                    return;
                  }
                  var recvdata = data.data;
                  // console.log("recvd", recvdata.getUint8(0));

                  try {
                  

                    flcan.parseData(recvdata.getUint8(0), recvdata);
                  } catch (err) {
                    console.log(canid.toString(16), recvdata, ":", err);
                  }
                };

                port.onReceiveError = (error) => {
                  console.log("here connect error", error);

                  this._write("[!] " + error + "\n");
                };

                port.onAuthTokenFetch = (token) => {
                  console.log("Fetching key for token");
                  return token;
                };
                flcan.authenticate().then(() => {
                  flcan.start();
                });
              });
            } catch (error) {
              console.log("error", error);
            }
          }
        );
      });
    }

    // for dummy data
    // setTimeout(() => {
    //   this.setState({
    //     linked: mode,
    //   });
    // }, 3000);
  };

  disconncect = (mode) => {
    if (this.state.linked === linkMode.CANBUS) {
     flcan.stop()
     .then(()=>{
     
   flcan.disconnect()
        .then(() => {
          this._write(
            "[!] Disconnected from " + port.device_.productName + "\n"
          );
        
          this.setState({ linked: linkMode.NONE });
        })
        .catch(
        console.log('error in disconnect')
        );
        })
    }

    
  };

  toggleLogMode = () => {
    this.setState({ enableLog: !this.state.enableLog, dataLog: [] },()=>(this.state.enableLog)?this.log():null);
  };
  log()
  {
    // alert('yupp baby')
  }

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

  runDiagnostics = () => {
    // dummy
    this.setState({
      report: dummy.nextDiagnostics(),
    });
  };

  probe = (mode) => {
    // pass dummy datastream
    // const prevmetrics = this.state.metrics;
    // const tempdatalog = this.state.dataLog;
    // // log data if needed


   
    // if (this.state.enableLog) {
    //   tempdatalog.push(newlog);
    // }
    // this.setState({
    //   log: newlog,
    //   metrics: logToMetrics(prevmetrics, newlog),
    //   dataLog: tempdatalog,
    // });
  };
  // debug only
  _write(str) {
    console.log("write function ", str);
  }
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
});

export class DeviceManagerProvider extends DeviceManager {
  componentDidMount() {
    flcan.opcodes = Object.freeze({
      FLCAN_CMD_FLUSH_HOSTQ: 0x00,
      FLCAN_CMD_FLUSH_DEVQ: 0x01,
      FLCAN_CMD_SET_BITRATE: 0x02,
      FLCAN_CMD_GET_BITRATE: 0x03,
      FLCAN_CMD_SET_MODE: 0x04,
      FLCAN_CMD_GET_MODE: 0x05,
      FLCAN_CMD_SET_CHG: 0x06,
      FLCAN_CMD_GET_CHG: 0x07,
      FLCAN_CMD_START: 0x08,
      FLCAN_CMD_STOP: 0x09,
      FLCAN_CMD_GET_STATS: 0x0a,
      FLCAN_CMD_GET_FEATURES: 0x0b,
    });

    flcan.status = {
      device: 0,
      driver: 0,
    };

    flcan.getDevices = () => {
      alert("called");
      return navigator.usb.getDevices().then((devices) => {
        return devices.map(
          (device) => console.log("devices", device)
          // flcan.Port(device)
        );
      });
    };

    flcan.requestPort = () => {
      //1 step

      console.log("request port");
      // const filters = [
      //   { vendorId: 0xb00b, productID: 0x1ee5 },
      //   /* Add more here */
      // ];
      const data = navigator.usb.requestDevice({ filters: [] }).then(
        (device) =>
          // console.log('device at flcan port usb',device)
          new flcan.Port(device)
      );
      console.log("data at requestPort", data);
      return data;
    };

    flcan.newPort = (device) => {
      console.log("rrr", device);
      this.device_ = device;

      var data = { metadata: null, data: null };
      this.setState({ device: device, packet_rx: data }, () =>
        console.log("packetrx state", this.state.device, this.state.packet_rx)
      );
    };
    flcan.Port = function (device) {
      console.log("device at flcan port func", device);
      this.device_ = device;
      this.packet_rx = { metadata: null, data: null };
      this.packet_tx = { metadata: null, data: null };
      flcan.newPort(device);
    };

    flcan.connect = () => {
      // 2 step

      console.log("inside port connect function");
      return this.state.device
        .open()
        .then(() => {
          console.log("then port connection functions", this.state.device);
          if (this.state.device.configuration == null) {
            return this.state.device.selectConfiguration(1);
          }
          console.log("then port connection functions", this.state.device);
        })

        .then(() => this.state.device.claimInterface(0))
        .then(
          () => this.state.device.claimInterface(1),
          () => {}
        );
    };

    flcan.sendCommand = (opcode, data) => {
      // console.log('send command',data)
      if (data === undefined) {
        // No DATA stage
        return this.state.device.controlTransferOut({
          requestType: "class",
          recipient: "interface",
          request: opcode,
          value: 0,
          index: 0,
        });
      } else if (Number.isInteger(data)) {
        // command is expecting DATA stage

        //   console.log(data,'insode nimber is integer condn')
        return this.state.device.controlTransferIn(
          {
            requestType: "class",
            recipient: "interface",
            request: opcode,
            value: 0,
            index: 0,
          },
          data
        );
      } else if (data.buffer instanceof ArrayBuffer) {
        // command generates DATA stage
        return this.state.device.controlTransferOut(
          {
            requestType: "class",
            recipient: "interface",
            request: opcode,
            value: 0,
            index: 0,
          },
          data.buffer
        );
      } else {
        console.log(data);
        throw new TypeError("Invalid Argument. Not of type Int or ArrayBuffer");
      }
    };

    flcan.clearRxPacket = function () {
      this.packet_rx.metadata = null;
      this.packet_rx.data = null;
    };

    flcan.clearTxPacket = function () {
      this.packet_tx.metadata = null;
      this.packet_tx.data = null;
    };

    flcan.stop = function () {
      return this.sendCommand(flcan.opcodes.FLCAN_CMD_STOP).then(
        (this._stop = true)
      );
    };

    flcan.start = () => {
      let readLoop = () => {
        const {
          endpointNumber} = this.state.device.configuration.interfaces[0].alternate.endpoints[0];
        this.device_
          .transferIn(endpointNumber, 12)
          .then((buffer) => {

            var data = { ...this.state.packet_rx };
            data.metadata = buffer.data;
            
         
            this.setState({ packet_rx: data }, () => {
           
            });
          })
          .catch((error) => {
            port.onReceiveError(error);
          })
          .then(() => {
            return this.device_.transferIn(
              endpointNumber,
              this.state.packet_rx.metadata.getUint8(8)
            );
          })
          .then((buffer) => {
            console.log("got data");
            var data = { ...this.state.packet_rx };

            data.data = buffer.data;

            this.setState({ packet_rx: data }, () => {

              port.onReceive(this.state.packet_rx);
            });

            readLoop();
          })
          .catch((error) => {
            port.onReceiveError(error);
          });
      };

      return flcan
        .selectProtocol()
        .then(() => {
          flcan.sendCommand(flcan.opcodes.FLCAN_CMD_START);
        })
        // .then(() => {
        //   flcan.sync(0x23);
        // })
        .then(() => {
          readLoop();

        })
        .then(() => {
          console.log("ide");
          flcan.identify(0x21);

        })
        ;
    };

    flcan.selectProtocol = function () {
      return flcan.sendCommand(0x0c, new Uint8Array([1]));
    };

    flcan.wake = function (addr) {
      return flcan.sendCommand(0x10); /* wakeup */
    };

    flcan.south = function (ddr) {
      //step5

      console.log("south");
      return this.sendCommand(0x0e, new Uint8Array([ddr]));
    };

    flcan.sync = function (addr) {
      // step 6
      console.log("sync");

      return this.sendCommand(0x0f, new Uint8Array([addr]));
    };

    flcan.sleep = function (addr) {
      // bms sleep
      return this.sendCommand(0x12, new Uint8Array([addr]));
    };

    flcan.identify = function (addr) {
      //serial number etc
      console.log('identity',this.sendCommand(0x11, new Uint8Array([addr])))
      return this.sendCommand(0x11, new Uint8Array([addr]));
    };

    flcan.authenticate = function () {
      // step 3: can-iot device authenticate
      console.log("authenticate function");
      return flcan
        .sendCommand(flcan.opcodes.FLCAN_CMD_GET_CHG, 4)
        .then((token) => port.onAuthTokenFetch(token.data))
        .then((key) => flcan.sendCommand(flcan.opcodes.FLCAN_CMD_SET_CHG, key));
    };

    flcan.Port.flush_can = function () {
      return this.sendCommand(flcan.opcodes.FLCAN_CMD_FLUSH_DEVQ);
    };

    flcan.Port.flush_usb = function () {
      return this.sendCommand(flcan.opcodes.FLCAN_CMD_FLUSH_HOSTQ);
    };

    flcan.Port.flush = function () {
      return this.flush_can().then(this.flush_usb());
    };

    flcan.disconnect = () => {
      return this.state.device.close();
    };

    flcan.Port.send = function (metadata, data) {
      const {
        endpointNumber,
      } = this.device_.configuration.interfaces[0].alternate.endpoints[1];
      return this.device_
        .transferOut(endpointNumber, metadata)
        .then(() => this.device_.transferOut(endpointNumber, data))
        .catch((err) => {
          console.log(err);
        });
    };

    flcan.parseData = (gf, data) => {

      console.log('identity',gf)

    if(gf===8)
    {
      this.setState({
        linked: 1,identity:true
      },()=>{
      console.log('identity true')

      });
    }

else if(this.state.identity)
{

      var s = {};
      var i = 0;
      switch (gf) {
        case 1: {
          if (this.state.bms_info.id === undefined) 
          return;
          s = { timestamp: 0, cellVoltages: [] };
          s.timestamp = data.getUint32(1, !this.state.Lltte_Endian);
          for (i = 0; i < 13; i++) {
            s.cellVoltages.push(data.getUint16(5 + i * 2, !this.state.Lltte_Endian));
          }
          console.log("parsed", s);


          this.setState(
            {
              voltages: s,
            },
            () => {
              this.next();
            }
          );

        

          break;
        }

        case 2: {
          if (this.state.bms_info.id === undefined) 
          return;
          // temperature
          s = { timestamp: 0, temperatures: [] };
          s.timestamp = data.getUint32(1, !this.state.Lltte_Endian);
          for (i = 0; i < 6; i++) {
            s.temperatures.push(data.getInt16(5 + i * 2, !this.state.Lltte_Endian).toString());
          }
          console.log("parsed2", JSON.stringify(s));
          this.setState({ tempratures: s.temperatures}, () => {
            this.next();

          });
          break;
        }

        case 3: {
          //misc
          if (this.state.bms_info.id === undefined) 
          return;
          s.timestamp = data.getUint32(1, !this.state.Lltte_Endian);
          s.isenseCurrent = data.getInt32(5, !this.state.Lltte_Endian);
          // s.SOC = data.getFloat32(9, !this.state.Lltte_Endian);
          // s.SOH = data.getFloat32(13, !this.state.Lltte_Endian);
          // s.stackVoltage = data.getUint16(17, !this.state.Lltte_Endian);
          console.log('parsed3',JSON.stringify(s));
          this.setState({ currents: s }, () => {
            this.next();
            console.log("parsed3", JSON.stringify(this.state.currents));
          });
         
          break;
        }

        case 4: {
          //stats
          break;
        }

        case 5: {
          //capacity
          break;
        }

        case 6: {
          //

          break;
        }
        case 7: {
          //fault frame
          console.log('parsing 7',data.getUint8(5).toString(2))
          console.log(data.getUint8(5).toString(2));
          break;
        }

        case 8: {
          /*
				 uint8_t batt_id[20];
				uint8_t bms_ver;
				uint8_t warranty;
				uint8_t str_series;
				uint8_t str_parallel;
				uint16_t design_cap;
      */
          var bms_info = {};
          bms_info.id = new TextDecoder().decode(data["buffer"].slice(5, 25));
          bms_info.version = data.getUint8(25);
          bms_info.warranty = data.getUint8(26);
          bms_info.series = data.getUint8(27);
          bms_info.parallel = data.getUint8(28);


          this.setState({ bms_info: bms_info },()=>{console.log('parsed',this.state.bms_info)});
          // bms_info.des_cap = data.getUint16(30, true);
          break;
        }
        default: {
          break;
        }
      }
    }
    else
    {
      console.log('identity false')
      flcan.identify(0x21);
    }
    }
    // only for dummy data
    // if (this.state.linked) {
    //   this.interval = setInterval(
    //     () => this.probe(),
    //     metricsOptions.updateInterval
    //   );
    // }
    
  
  }

  componentDidUpdate() {
    // if (this.state.linked && !this.interval) {
    //   this.interval = setInterval(
    //     () => this.probe(),
    //     metricsOptions.updateInterval
    //   );
    // }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
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
        
          exportMenuItem:this.exportMenuItem
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
