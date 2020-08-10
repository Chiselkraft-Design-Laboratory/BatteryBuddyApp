import React from "react";
import pure from "recompose/pure";

let StopIcon = (props) => {
  return (
    <svg
      version="1.1"
      id="stop-icon"
      viewBox="0 0 24 24"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={props.size || 24}
      height={props.size || 24}
    >
      <path
        fill={props.color || "inherit"}
        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm4.8 16.8H7.2V7.2h9.5v9.6z"
      />
    </svg>
  );
};
StopIcon = pure(StopIcon);
StopIcon.displayName = "StopIcon";
StopIcon.muiName = "SvgIcon";

export default StopIcon;
