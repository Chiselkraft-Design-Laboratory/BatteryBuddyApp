import React from "react";
import pure from "recompose/pure";

let DownArrowIcon = (props) => {
  let cH = props.size ? props.size * (24 / 16) : 24;
  return (
    <svg
      version="1.1"
      id="downarrow-icon"
      viewBox="0 0 24 16"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={props.size || 24}
      height={cH || 16}
    >
      <path fill={props.color || "inherit"} d="M12 16L0 0h24z" />
    </svg>
  );
};
DownArrowIcon = pure(DownArrowIcon);
DownArrowIcon.displayName = "DownArrowIcon";
DownArrowIcon.muiName = "SvgIcon";

export default DownArrowIcon;
