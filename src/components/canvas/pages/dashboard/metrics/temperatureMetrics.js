import React,{useState,useEffect} from "react";
import { linearGradientDef } from "@nivo/core";
import { ResponsiveLine } from "@nivo/line";
import DefaultTile from "../../../helpers/defaultTile";
import * as palette from "../../../../themeworks/darkspaceUI/swatch";

const TemperatureMetrics = ({ feed }) => {
//   const [Data, setData] = useState(feed);
//   useEffect( () => {
// setData(feed)

//   }, [feed ]);
  return (
    <DefaultTile title="Temperature" caption="metrics">
      <ResponsiveLine
        data={feed}
        xScale={{ type: "time", format: "native" }}
        yScale={{ type: "linear", min: 0, max: 60 }}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          legend: "Pack Temperature",
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
        isInteractive={true}
        enableSlices={false}
        useMesh={false}
        enableArea={false}
        // colors={palette.tone.T5}
        defs={[
          linearGradientDef("G3", [
            { offset: 0, color: palette.tone.T5, opacity: 0.9 },
            { offset: 95, color: palette.tone.T5, opacity: 0 },
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
          grid: {
            line: {
              stroke: palette.dark.X3,
              strokeWidth: 2,
              strokeDasharray: "2 32",
            },
          },
        }}
      />
    </DefaultTile>
  );
};

export default TemperatureMetrics;
