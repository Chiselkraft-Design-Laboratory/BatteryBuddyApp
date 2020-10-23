import React from "react";
import * as time from "d3-time";
import logToMetrics,{parseBarMetrics,parseTimeMetrics,parseArrTimeMetrics,parseArrTimeMetrics1} from "./parseMetrics";
import { linkMode } from "../constants/typedef";
import * as dummy from "../dummies/dataStream";
import {
  metricsOptions,
  firstMenu,
  thirdMenu,
  fourthMenu,
} from "../constants/preferences";


const opCodes = Object.freeze({
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

export class DeviceManager extends React.Component {
  state = {
    activeChannel: 0,
    listOfChannels: [],
    linked: linkMode.NONE,
    spec: dummy.spec,
    log: {
      timestamp: 0,
      cellVoltage: [],
      PackVoltage: 0,
      PackCurrent: 0,
      packTemperature: 0,
      SOC: 0,
      SoH: 0,
      zones: 7,
      zoneTemperatures: [],
      voltages: [],
    },
    metrics: logToMetrics(),

    enableLog: false,
    dataLog: [],
    firstMenu: firstMenu,
    secondMenuData: ["Select Metrics"],
    analyticsData: ["PackCurrent", "SOC"],
    tempZoneData: thirdMenu,
    tempData: [0],
    cellindex: [0],
    cellsData: fourthMenu,
    report: {},
    // IOT states >>>>>>>>>>>>>>>>>>>>>>>
    connectedButton: "",
    packet_rx: { metadata: "" },
    selectedDevice: {},
    bms_info: {},
    productName: "",
    manufacturerName: "",
    serialNumber: "",
    voltages: "",
    tempratures: "",
    currents: "",
    Lltte_Endian: false,
    identity: false,
    disconnect:false,
    interval:200,
    progress:0
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  };
  populateChannels = () => {
    this.setState({
      listOfChannels: ["Battery X", "Battery Y", "Battery Z", "Battery ∞"],
    });
  };
  setActiveChannel = (index) => {
    this.setState({
      activeChannel: index,
    });
  };
  exportMenuItem = (val1, val2) => {
    var data = [...this.state.analyticsData];
    var TempData = [...this.state.tempData];

    // console.log("eee", val2);
    if (val2 === "firstMenu") {
      let id = this.firstMenu(val1);

      var firstMenu = [...this.state.firstMenu];
      firstMenu.splice(val1, 1);
      // console.log("eee 1", data, id);

      data.push(id);
      data.shift();
      this.setState({ analyticsData: data, secondMenuData: firstMenu });
    } else if (val2 === "secondMenuData") {
      let id = this.secondMenu(val1);
      data.shift();
      data.push(id);

      this.setState({ analyticsData: data })
    } else if (val2 === "tempZoneData") {
      var tempData = [...this.state.tempData];
      tempData.push(val1);
      tempData.shift();
      this.setState({ tempData: tempData });
    } else if (val2 === "cellsData") {
      var cellindex = [...this.state.cellindex];
      cellindex.push(val1);
      cellindex.shift();
      this.setState({ cellindex: cellindex });
    }
    //cellsData
  };
  firstMenu(val1) {
    var firstMenu = [...this.state.firstMenu];
    return firstMenu[val1];
  }
  secondMenu(val1) {
    var secondMenuData = [...this.state.secondMenuData];

    return secondMenuData[val1];
  }

  parseData = (gf, data) => {

    if(this.state.identity==false)
    {
    this.identity(0x23)

    }
 

    // else if(this.state.identity)
    // {
      console.log('parsed gf',gf)

    var s = {};
    var i = 0;
    switch (gf) {
      case 1: {
        s = { timestamp: 0, cellVoltages: [] };
        s.timestamp = data.getUint32(1, !this.state.Lltte_Endian);
        for (i = 0; i < this.state.bms_info.series; i++) {
          s.cellVoltages.push(
            data.getUint16(5 + i * 2, !this.state.Lltte_Endian)
          );
        }
      

        this.setState(
          {
            voltages: s,
          },
          () => {
            this.next();
console.log('parsed 1',this.state.voltages)
let date = new Date();
date = time.timeSecond.offset(date);
var cellData= parseBarMetrics(this.state.voltages.cellVoltages)
var volategsData =parseArrTimeMetrics1(this.state.metrics.voltages,"cell",parseInt(this.state.bms_info.series)-1,date,this.state.voltages.cellVoltages)
  if(!this.state.voltages.cellVoltages.length==0 || !this.state.voltages.cellVoltages==undefined)
  {
this.setState({ metrics: { ...this.state.metrics, cellVoltage: cellData,voltages:volategsData} });
  }

        
         
          }
        );

        break;
      }

      case 2: {
        if (this.state.bms_info === null) {
          return;
        }

        // temperature
        s = { timestamp: 0, temperatures: [] };
        s.timestamp = data.getUint32(1, !this.state.Lltte_Endian);
        for (i = 0; i < 6; i++) {
          s.temperatures.push(
            data.getInt16(5 + i * 2, !this.state.Lltte_Endian).toString()
          );
        }
      
        // console.log("parsed2", JSON.stringify(s));
        // let sate = new Date();
        // sate = time.timeSecond.offset(sate);
        // var temp=zoneTemp(this.state.ZoneTempPrev,sate,s.temperatures)
        
        this.setState({ tempratures: s.temperatures }, () => {
console.log('parsed 2',this.state.tempratures)

          this.next();
          let date = new Date();
          date = time.timeSecond.offset(date);
          var tempData=[...this.state.metrics.zoneTemperatures]
tempData= parseArrTimeMetrics(this.state.metrics.zoneTemperatures,'temprature',6,date,this.state.tempratures)
this.setState({ metrics: { ...this.state.metrics, zoneTemperatures: tempData} });

        });
        break;
      }

      case 3: {
        //misc

        if (this.state.bms_info === null) {
          return;
        }
        //1
        s.timestamp = data.getUint32(1, !this.state.Lltte_Endian); // 4
        s.isenseCurrent = data.getInt32(5, !this.state.Lltte_Endian); //4
        s.SOC = data.getFloat32(9, !this.state.Lltte_Endian);
        s.SOH = data.getFloat32(13, !this.state.Lltte_Endian);
        s.stackVoltage = data.getUint16(17, !this.state.Lltte_Endian); //2
        // console.log("parsed3", JSON.stringify(s));
       
        this.setState({ currents: s }, () => {
console.log('parsed 3',this.state.currents)

          this.next();

          let date = new Date();
          date = time.timeSecond.offset(date);
         var  currentData= parseTimeMetrics(this.state.metrics.PackCurrent,date,parseFloat(this.state.currents.isenseCurrent)/1000)


         var  SOCData= parseTimeMetrics(this.state.metrics.SOC,date,parseFloat(this.state.currents.SOC))


         

this.setState({ metrics: { ...this.state.metrics, PackCurrent: currentData,SOC:SOCData} });
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
        if (this.state.bms_info === null) {
          return;
        }
        // console.log("parsing 7", data);
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
 if(!this.state.disconnect)
 {
 this.setState(
   {
     linked: 1,
     identity: true,
   }
 );
 }
        var bms_info = {};
        bms_info.id = new TextDecoder().decode(data["buffer"].slice(5, 25));
        bms_info.version = data.getUint8(25);
        bms_info.warranty = data.getUint8(26);
        bms_info.series = data.getUint8(27);
        bms_info.parallel = data.getUint8(28);

        this.setState({ bms_info: bms_info ,interval:1000}, () => {
          console.log("parsed 8", this.state.bms_info);
          this.next();

        });
        // bms_info.des_cap = data.getUint16(30, true);
        break;
      }
      default: {
        break;
      }
      // }
    }
    // else
    // {
    //   console.log('identity false')
    // this.identity(0x23)
    // }
  };

  onCollapse = (collapsed) => {
    // console.log(collapsed);
    this.setState({ collapsed });
  };

  async getPorts() {
    return navigator.usb.getDevices().then((devices) => {
      return devices.map((device) => console.log(device));
    });
  }

  selectProtocol = () => {
    return this.sendCommand(0x0c, new Uint8Array([1]));
  };

  bmsSleep = (addr) => {
    //Make Bms in sleep mode
    // bms sleep

    return this.sendCommand(0x12, new Uint8Array([addr]));
  };

  canIotStop = () => {
    return this.sendCommand(opCodes.FLCAN_CMD_STOP)
    // .then(()=>{alert('ttt')});
  };

  readLoop = () => {
    // console.log("loop ");
    const {
      endpointNumber,
    } = this.state.selectedDevice.configuration.interfaces[0].alternate.endpoints[0];

    this.state.selectedDevice
      .transferIn(endpointNumber, 12)
      .then((buffer) => {
        var data = { ...this.state.packet_rx };
        data.metadata = buffer.data;

        this.setState({ packet_rx: data }, () => {});
      })
      .catch((error) => {
        //TODO: kardo
        // port.onReceiveError(error);
      })
      .then(() => {
        return this.state.selectedDevice.transferIn(
          endpointNumber,
          this.state.packet_rx.metadata.getUint8(8)
        );
      })
      .then((buffer) => {
        // console.log("got data");
        var data = { ...this.state.packet_rx };

        data.data = buffer.data;

        this.setState({ packet_rx: data }, () => {
          // console.log("this.state.packet_rx", this.state.packet_rx);
          this.onRecieve(this.state.packet_rx);
        });

        if (!this.state.disconnect) {
          this.readLoop();
        } else {
          // console.log("disconnected");
        }
      })
      .catch((error) => {
        // port.onReceiveError(error);
        // console.log(this.state.packet_rx.metadata);
        // console.log(error);
      });
  };

  sync = (addr) => {
    // step 6

    return this.sendCommand(0x0f, new Uint8Array([addr]));
  };

  startTransfer() {
    return (
      this.selectProtocol()
        .then(() => {
          // console.log("start command");
          this.sendCommand(opCodes.FLCAN_CMD_START);
        })
        .then(() => {
        this.sync(0x23);
        })
        .then(() => {
          if (!this.state.disconnect) {
            this.readLoop();
          } else {
            // console.log("disconnected");
          }
        })
        .then(() => {
            this.identity(0x23);

          // setInterval(() => {
          //   this.identity(0x23);
          // console.log("identity calling");



          // }, 1000);
          
        })
    );
  }
  identity = (addr) => {
    //serial number etc
    // console.log('identity',this.sendCommand(0x11, new Uint8Array([addr])))
    return this.sendCommand(0x11, new Uint8Array([addr]));
  };

  onRecieve(data) {
    // port.onReceive = (data) => {

    try {
      var canid = data.metadata.getUint32(4, true); //?little endian
    } catch (err) {
      return;
    }

    if ((canid & 0x00ffff) !== 0xff33) {
      if ((canid & 0x00ffff) === 0xfffc) {
        // console.log("Heartbeat!");
      } else {
        // console.log("canId", canid);
        // console.log(canid.toString(16));
      }
      return;
    }
    var recvdata = data.data;
    // console.log("recvd", recvdata.getUint8(0));

    try {
      this.parseData(recvdata.getUint8(0), recvdata);
    } catch (err) {
      // console.log(canid.toString(16), recvdata, ":", err);
    }
  }

  sendCommand = (opcode, data) => {
    // console.log("send command", data, this.state.selectedDevice);
    if (data === undefined) {
      // No DATA stage
      return this.state.selectedDevice.controlTransferOut({
        requestType: "class",
        recipient: "interface",
        request: opcode,
        value: 0,
        index: 0,
      });
    } else if (Number.isInteger(data)) {
      // command is expecting DATA stage

      // console.log(data, " integer condn in command function");
      return this.state.selectedDevice.controlTransferIn(
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
      return this.state.selectedDevice.controlTransferOut(
        {
          requestType: "class",
          recipient: "interface",
          request: opcode,
          value: 0,
          index: 0,
        },
        data.buffer
      );
      // console.log("ttt");
    } else {
      // console.log(data);
      throw new TypeError("Invalid Argument. Not of type Int or ArrayBuffer");
    }
  };
  onAuthTokenFetched = (token) => {
    // console.log('got token and will simply return that token',token)
    return token;
  };

  authenticate() {
    // console.log("authenticate function");

    return this.sendCommand(opCodes.FLCAN_CMD_GET_CHG, 4)
      .then((token) => this.onAuthTokenFetched(token.data))
      .then((key) => {
        return this.sendCommand(opCodes.FLCAN_CMD_SET_CHG, key);
      });
  }

  async requestPort() {
    const filters = [
      { 'vendorId': 0xB00B, 'productID': 0x1EE5 },
    ]

    var device;

    navigator.usb
      .requestDevice({ filters: [ { 'vendorId': 0xC007, 'productID': 0x1EE5 }] })
      .then((selectedDevice) => {
        navigator.usb.addEventListener('disconnect', selectedDevice => {
        this.setState({progress:0})
  });
     
        device = selectedDevice;
     
        this.setState({ selectedDevice: selectedDevice }, () => {
          
          // console.log("selectedDevice", this.state.selectedDevice);
          this.ConnectToDevice();
        });
        // Begin a session.
      })

      .catch((error) => {
        console.log(error);
        this.setState(
          {
            progress:0,
            identity: true,
          }
        );
      });
  }

  async ConnectToDevice() {
    await this.state.selectedDevice.open();
    if (this.state.selectedDevice.configuration === null)
      await this.state.selectedDevice.selectConfiguration(1);
    await this.state.selectedDevice.claimInterface(0).then(() => {
      // console.log('claimed interface')
      this.canIotStop()
        .then(() => {
          this.authenticate();
        })
        .then(() => {
          this.startTransfer();
        });
    });
  }

  // disconnect() {
  //   alert('yyyy')
  // }

  async next() {
    // let next = dataStream();
    // console.log("temprature", this.state);
    let date = new Date();
    date = time.timeSecond.offset(date);
    

    let log = {
      timestamp: date,
      cellVoltage: this.state.voltages.cellVoltages,
      PackVoltage: this.state.currents.stackVoltage,
      PackCurrent: this.state.currents.isenseCurrent,
      packTemperature: (parseInt(this.state.tempratures) + 600) / 10,
      SOC: parseInt(this.state.currents.SOC) ,
      SoH: this.state.currents.SOH,
      zones: 7,
      zoneTemperatures: this.state.tempratures,
      voltages: this.state.voltages.cellVoltages
        ? this.state.voltages.cellVoltages
        : [],
    };
    let prev = this.state.metrics;
    const tempdatalog = this.state.dataLog;
    // // log data if needed

    if (this.state.enableLog) {
      tempdatalog.push(log);
    }

    this.setState({
      log: log,
      dataLog: tempdatalog,
    },()=>{console.log('log',this.state.metrics)});
  }

  conncect = (mode) => {
    // console.log("zone", this.state.zoneTemperatures);
 
    if (this.state.linked === 0) {
this.setState({disconnect:false,progress:1},()=>{
  this.requestPort();

})    }
else{
  this.setState({linked:0})
}
  };

  disconncect = (mode) => {
     this.state.selectedDevice.close();
    this.bmsSleep();
    this.canIotStop();
    this.setState({disconnect:true,linked:linkMode.NONE,progress:0})


  };

  toggleLogMode = () => {
    this.setState({ enableLog: !this.state.enableLog, dataLog: [] }, () =>
      this.state.enableLog ? this.log() : null
    );
  };
  log() {
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
  // _write(str) {
  //   console.log("write function ", str);
  // }
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

    this.next()
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
          disconnect:this.state.progress===1?this.disconncect:this.conncect,
          probe: this.probe,
          toggleLogMode: this.toggleLogMode,
          exportLog: this.exportLog,
          runDiagnostics: this.runDiagnostics,

          exportMenuItem: this.exportMenuItem,
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
