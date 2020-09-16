import React from "react";
import pure from "recompose/pure";

let SplitViewIcon = (props) => {
  let cH = props.size ? props.size * (24 / 16) : 24;
  return (
    <svg
      version="1.1"
      id="splitview-icon"
      viewBox="0 0 24 16"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={props.size || 24}
      height={cH || 16}
    >
      <path
        fill={props.color || "inherit"}
        d="M20.7.8H3.3C1.5.8 0 2.2 0 4v8c0 1.8 1.5 3.3 3.3 3.3h17.4c1.8 0 3.3-1.5 3.3-3.3V4C24 2.2 22.5.8 20.7.8zM22.4 12c0 .9-.7 1.7-1.7 1.7h-7.1V2.4h7.1c.9 0 1.7.7 1.7 1.7V12z"
      />
    </svg>
  );
};
SplitViewIcon = pure(SplitViewIcon);
SplitViewIcon.displayName = "SplitViewIcon";
SplitViewIcon.muiName = "SvgIcon";

export default SplitViewIcon;
