import React from "react";
import { linearGradientDef } from "@nivo/core";
import { ResponsiveBar } from "@nivo/bar";
import * as palette from "../../../../themeworks/darkspaceUI/swatch";
import DefaultTile from "../../../helpers/defaultTile";

const CellVoltageMetrics = ({ feed }) => {
  console.log("feed", feed);
  const graphProps = {
    axisTop: null,
    axisRight: null,
    axisBottom: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "cell",
      legendPosition: "end",
      legendOffset: 32,
    },
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "voltage",
      legendPosition: "end",
      legendOffset: -40,
    },
    margin: { top: 0, right: 20, bottom: 50, left: 50 },
    padding: 0.6,
    enableLabel: false,
  };
  const animateProps = {
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
  };
  const themeProps = {
    theme: {
      axis: {
        legend: {
          text: {
            fill: palette.dark.X4,
          },
        },
        ticks: {
          line: {
            stroke: palette.dark.X2,
          },
          text: {
            fill: palette.dark.X4,
          },
        },
      },
      grid: {
        line: {
          stroke: palette.dark.X2,
          strokeWidth: 2,
          // strokeDasharray: "1 4",
        },
      },
      tooltip: {
        container: {
          color: palette.dark.X2,
          background: palette.tone.T1,
        },
      },
    },
  };
  return (
    <DefaultTile wide title="Cell Voltage" caption="metrics">
      <ResponsiveBar
        data={feed}
        keys={["y"]}
        indexBy="x"
        maxValue={4.2}
        {...graphProps}
        {...animateProps}
        {...themeProps}
        defs={[
          linearGradientDef("G1", [
            { offset: 0, color: palette.tone.T1, opacity: 0.6 },
            { offset: 100, color: palette.tone.T2 },
          ]),
        ]}
        fill={[
          {
            match: {
              id: "y",
            },
            id: "G1",
          },
        ]}
        tooltip={({ id, value }) => <strong>{value + "v"}</strong>}
      />
    </DefaultTile>
  );
};

export default CellVoltageMetrics;
