import React from "react";
import pure from "recompose/pure";

let WarningIcon = (props) => {
  return (
    <svg
      version="1.1"
      id="warning-icon"
      viewBox="0 0 24 24"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={props.size || 24}
      height={props.size || 24}
    >
      <path
        fill={props.color || "inherit"}
        d="M23.5 18L15 2.4C14 .7 11.9.2 10.2 1.2c-.5.3-.9.7-1.2 1.2L.5 18c-1 1.7-.4 3.8 1.2 4.8.5.3 1.2.5 1.8.5h17c1.9 0 3.5-1.6 3.5-3.5 0-.6-.2-1.3-.5-1.8zM12 20.5c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4zm1.4-5.6c0 .8-.7 1.4-1.5 1.4-.7 0-1.3-.6-1.4-1.4v-7c0-.8.6-1.4 1.4-1.5.8 0 1.4.6 1.5 1.4v7.1z"
      />
    </svg>
  );
};
WarningIcon = pure(WarningIcon);
WarningIcon.displayName = "WarningIcon";
WarningIcon.muiName = "SvgIcon";

export default WarningIcon;
