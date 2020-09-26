import React from "react";
import { makeStyles, Paper, Grid } from "@material-ui/core";
import withCanvas from "../withCanvas";
import { sidebarOptions } from "../../constants/preferences";
import SideBarHeader from "./header";
import SideBarFeed from "./feed";
import SideBarDisconnect from "./disconnect";
import SideBarAlert from "./alert";
import SideBarFooter from "./footer";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: sidebarOptions.width,
      padding: theme.spacing(1.5),
    },
    wrapper: {
      height: "100%",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    grow: {
      flexGrow: 1,
    },
  }),
  { index: 1 }
);

const SideBar = ({ canvas, spec, feed, disconnect }) => {
  const cl = useStyles();

  var minTemp = Math.min(...feed.zoneTemperatures);
  var maxTemp = Math.max(...feed.zoneTemperatures);
  var minVolt = Math.min(...feed.voltages);
  var maxVolt = Math.max(...feed.voltages);

  return (
    <Grid item xs={canvas.dense ? 12 : undefined} classes={{ root: cl.root }}>
      <Paper elevation={6} component="section" classes={{ root: cl.wrapper }}>
        <SideBarHeader make={spec.make} model={spec.model} />

        {/* <Select
        disableUnderline
        defaultValue={0}
      placeholder={'select metrics'}
        classes={{ root: cl.Select, input: cl.selectInput }}
      >



    <MenuItem 
   


      // onClick={(event) => selected(event, index)}
      onClick={(event) => exportMenuItem(index,'firstMenu' )}

    
      value={index}>{value}</MenuItem>
        
    

      </Select> */}
        <SideBarAlert
          caption="Under_voltage"
          value={parseFloat(minVolt) / 1000}
          suffix="V"
        />
        <SideBarFeed caption="Health" value={feed.SoH} suffix="%" />
        <SideBarFeed caption="Charge %" value={feed.SoC} suffix="%" />
        <SideBarFeed
          caption="Current"
          value={parseFloat(feed.packCurrent) / 1000}
          suffix="A"
        />
        <SideBarFeed
          caption="PackVoltage"
          value={parseFloat(feed.packVoltage) / 1000}
          suffix="V"
        />
        <SideBarFeed
          caption="Voltage_min"
          value={parseFloat(minVolt) / 1000}
          suffix="V"
        />
        <SideBarFeed
          caption=" Voltage_max"
          value={parseFloat(maxVolt) / 1000}
          suffix="V"
        />
        <SideBarFeed
          caption="Temperature_min"
          value={parseFloat(minTemp) + 425}
          suffix="ºC"
        />
        <SideBarFeed
          caption="Temperature_max"
          value={parseFloat(maxTemp) + 44}
          suffix="ºC"
        />

        <SideBarDisconnect action={disconnect} />

        <div className={cl.grow} />
        <SideBarFooter spec={spec} />
      </Paper>
    </Grid>
  );
};

export default withCanvas(SideBar);
