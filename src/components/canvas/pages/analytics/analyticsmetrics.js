import React from "react";
import { linearGradientDef } from "@nivo/core";

import { ResponsiveLine } from "@nivo/line";
import { makeStyles, Grid } from "@material-ui/core";
import { pageOptions } from "../../../constants/preferences";
import * as palette from "../../../themeworks/darkspaceUI/swatch";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      height: pageOptions.analyticsMetricsHeight,
    },
  }),
  { index: 1 }
);

const AnalyticsMetrics = ({ split, feed }) => {
  const cl = useStyles();
  return (
    <Grid item xs={12} md={split ? 6 : 12} classes={{ root: cl.root }}>
      <ResponsiveLine
        data={feed}
        xScale={{ type: "time", format: "native", reverse: "true" }}
        yScale={{ type: "linear", min: -100, max: 100 }}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickValues: 6,
        }}
        axisBottom={{
          format: "%M:%S",
          tickValues: "every 2 seconds",
          legend: "time",
          legendPosition: "end",
          legendOffset: 46,
        }}
        legends={[
          {
            anchor: "bottom-left",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 50,
            itemsSpacing: 16,
            itemDirection: "left-to-right",
            itemWidth: 120,
            itemHeight: 20,
            itemOpacity: 0.75,
            itemTextColor: palette.dark.X4,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
          },
        ]}
        margin={{ top: 30, right: 10, bottom: 60, left: 50 }}
        enablePoints={false}
        enableGridX={true}
        curve="cardinal"
        animate={false}
        motionStiffness={120}
        motionDamping={50}
        isInteractive={false}
        enableSlices={false}
        useMesh={false}
        enableArea={false}
        colors={{ datum: "color" }}
        defs={[
          linearGradientDef("G2", [
            { offset: 0, color: palette.tone.T4, opacity: 0.6 },
            { offset: 100, color: palette.dark.X2 },
          ]),
        ]}
        fill={[
          {
            match: {
              id: "Current",
            },
            id: "G2",
          },
        ]}
        theme={{
          axis: {
            ticks: { text: { fill: palette.dark.X4, fontSize: 14 } },
          },
          legend: {
            text: {
              fill: palette.lite.X3,
            },
          },
          grid: { line: { stroke: palette.dark.X3, strokeDasharray: "2 2" } },
        }}
      />
    </Grid>
  );
};

export default AnalyticsMetrics;
