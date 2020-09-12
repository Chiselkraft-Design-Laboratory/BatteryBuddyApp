import React from "react";
import { linearGradientDef } from "@nivo/core";
import { ResponsiveLine } from "@nivo/line";
import DefaultTile from "../../../helpers/defaultTile";
import * as palette from "../../../../themeworks/darkspaceUI/swatch";

const TemperatureMetrics = ({ feed }) => {
  // console.log("Temperature", feed);

  return (
    <DefaultTile title="Temperature" caption="metrics">
      <ResponsiveLine
        data={feed}
        xScale={{ type: "time", format: "native" }}
        yScale={{ type: "linear", min: 0, max: 70 }}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          legend: "Pack Temperature",
          legendPosition: "end",
          legendOffset: -40,
          tickValues: 6,
        }}
        axisBottom={{
          format: "%M:%S",
          tickValues: "every 4 seconds",
          legend: "time",
          legendPosition: "end",
          legendOffset: 46,
        }}
        margin={{ top: 30, right: 10, bottom: 60, left: 50 }}
        enablePoints={false}
        enableGridX={false}
        curve="cardinal"
        animate={false}
        motionStiffness={120}
        motionDamping={50}
        isInteractive={false}
        enableSlices={false}
        useMesh={true}
        enableArea={true}
        colors={palette.tone.T5}
        defs={[
          linearGradientDef("G3", [
            { offset: 0, color: palette.tone.T5, opacity: 0.6 },
            { offset: 100, color: palette.dark.X2 },
          ]),
        ]}
        fill={[
          {
            match: {
              id: "Temperature",
            },
            id: "G3",
          },
        ]}
        theme={{
          axis: {
            legend: {
              text: {
                fill: palette.dark.X4,
              },
            },
            ticks: { text: { fill: palette.dark.X4, fontSize: 14 } },
          },
          grid: { line: { stroke: palette.dark.X3, strokeDasharray: "1 24" } },
        }}
      />
    </DefaultTile>
  );
};

export default TemperatureMetrics;
