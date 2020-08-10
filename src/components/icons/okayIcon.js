import React from "react";
import pure from "recompose/pure";

let OkayIcon = (props) => {
  return (
    <svg
      version="1.1"
      id="okay-icon"
      viewBox="0 0 24 24"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={props.size || 24}
      height={props.size || 24}
    >
      <path
        fill={props.color || "inherit"}
        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm6.7 9s0 .1 0 0L11 16.7c-.5.5-1.2.5-1.7 0l-4-3.7c-.5-.4-.5-1.2-.1-1.7s1.2-.5 1.7-.1l3.2 2.9L17 7.3c.5-.5 1.2-.5 1.7 0s.5 1.3 0 1.7z"
      />
    </svg>
  );
};
OkayIcon = pure(OkayIcon);
OkayIcon.displayName = "OkayIcon";
OkayIcon.muiName = "SvgIcon";

export default OkayIcon;
