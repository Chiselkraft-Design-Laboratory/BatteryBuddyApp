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
  console.log("sidebar", { spec: spec, feed: feed });
  return (
    <Grid item xs={canvas.dense ? 12 : undefined} classes={{ root: cl.root }}>
      <Paper elevation={6} component="section" classes={{ root: cl.wrapper }}>
        <SideBarHeader make={spec.make} model={spec.model} />
        <SideBarFeed caption="Health" value={feed.SoH} suffix="%" />
        <SideBarFeed caption="Charge" value={feed.SoC} suffix="%" />
        <SideBarFeed caption="Current" value={feed.packCurrent} suffix="A" />
        <SideBarFeed caption="Voltage" value={feed.packVoltage} suffix="V" />
        <SideBarFeed
          caption="Temperature"
          value={feed.packTemperature}
          suffix="ºC"
        />
        <SideBarAlert />
        <div className={cl.grow} />
        <SideBarDisconnect action={disconnect} />
        <SideBarFooter spec={spec} />
      </Paper>
    </Grid>
  );
};

export default withCanvas(SideBar);
