import React,{useEffect} from "react";
import * as palette from "../../../themeworks/darkspaceUI/swatch";
import withDeviceManager from "../../../core/devicemanager";
import AnalyticsTile from "./analyticstile";
import AnalyticsHeader from "./analyticsheader";
import AnalyticsMetrics from "./analyticsmetrics";
import AnalyticsLog from "./analyticslog";
import AnalyticsFooter from "./analyticsfooter";
import { color } from "../../../constants/preferences";

const AnalyticsPage = ({ device }) => {
  // feed prep
  const live = device.metrics;
  var feed1=[];
  var feed2=[];
  var feed3=[];
  var feed4=[];
  var feedTempData=[];
  var feedVoltageData=[];


  var cellsData =()=>{

    var obj = {};
    obj.color = color[3];

    obj.id = `Cell${parseInt(device.cellindex)+1}`;
    obj.data = live.voltages[device.cellindex].data;

    feedVoltageData.push(obj)

  };

  var tempZoneData =()=>{

    var obj = {};
    obj.color = color[2];

    obj.id = `Temprature${parseInt(device.tempData)+1}`;
    obj.data = live.zoneTemperatures[device.tempData].data;

    feedTempData.push(obj)

  };
 tempZoneData();
 cellsData();



 var feedAnalytics = device.analyticsData.reduce((acc, value, index) => {
    var obj = {};
    obj.color = color[index];
    obj.id = value;
    obj.data = live[`${value}`];
    acc.push(obj);
    return acc;
  }, []);

  var feed = feedTempData.concat(feedAnalytics);
  feed=feed.concat(feedVoltageData)


  // live.zoneTemperatures.map((value)=>{
  //   return value.color=palette.lite.X1
  // })
  // feed =feed.concat(live.zoneTemperatures)
  const [split, setSplit] = React.useState(false);
  if(split)
  {
    feed1.push(feed[0]);
    feed2.push(feed[1])
    feed3.push(feed[2])
    feed4.push(feed[3])


  }
  
  // functions
  const toggleSplit = () => {



    setSplit(!split);
  };

  return (
    <AnalyticsTile
      footer={
        <AnalyticsFooter
          logging={device.enableLog}
          toggleLog={device.toggleLogMode}
          saveLog={device.exportLog}
          firstMenu={device.firstMenu}
        
          secondMenuData={device.secondMenuData}
          exportMenuItem={device.exportMenuItem}
          tempZoneData={device.tempZoneData}
          cellsData={device.cellsData}
        />
      }
    >
      {/* header */}
      <AnalyticsHeader split={split} toggleSplit={toggleSplit} />
      {/* metrics */}
      <AnalyticsMetrics split={split} feed={split?feed1:feed} />

      {split && <AnalyticsMetrics split={split} feed={feed2} />}
      {split && <AnalyticsMetrics split={split} feed={feed3} />}
      {split && <AnalyticsMetrics split={split} feed={feed4} />}


      {/* log */}
      {device.enableLog && <AnalyticsLog data={device.dataLog} />}
    </AnalyticsTile>
  );
};

export default withDeviceManager(AnalyticsPage);
