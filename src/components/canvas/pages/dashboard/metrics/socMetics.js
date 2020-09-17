import React from "react";
import { linearGradientDef } from "@nivo/core";
import { ResponsiveLine } from "@nivo/line";
import DefaultTile from "../../../helpers/defaultTile";
import * as palette from "../../../../themeworks/darkspaceUI/swatch";

const SoCMetrics = ({ feed }) => {
  return (
    <DefaultTile wide title={"SoC"} caption="metrics">
      <ResponsiveLine
        data={feed}
        xScale={{ type: "time", format: "native" }}
        yScale={{ type: "linear", min: 0, max: 100 }}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          legend: "SoC",
          legendPosition: "end",
          legendOffset: -44,
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
        useMesh={false}
        enableArea={true}
        colors={palette.tone.T3}
        defs={[
          linearGradientDef("G4", [
            { offset: 0, color: palette.tone.T3, opacity: 0.9 },
            { offset: 95, color: palette.tone.T3, opacity: 0 },
          ]),
        ]}
        fill={[
          {
            match: {
              id: "SoC",
            },
            id: "G4",
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
          grid: {
            line: {
              stroke: palette.dark.X3,
              strokeWidth: 2,
              strokeDasharray: "2 24",
            },
          },
        }}
      />
    </DefaultTile>
  );
};

export default SoCMetrics;
