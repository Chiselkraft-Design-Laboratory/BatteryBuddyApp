import React from "react";
import pure from "recompose/pure";

let ErrorIcon = (props) => {
  return (
    <svg
      version="1.1"
      id="error-icon"
      viewBox="0 0 16 16"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={props.size || 24}
      height={props.size || 24}
    >
      <path
        fill={props.color || "inherit"}
        d="M14.9 4c-.7-1.2-1.7-2.2-2.9-2.9C10.8.4 9.4 0 8 0S5.2.4 4 1.1C2.8 1.8 1.8 2.8 1.1 4 .4 5.2 0 6.6 0 8s.4 2.8 1.1 4c.7 1.2 1.7 2.2 2.9 2.9 1.2.7 2.6 1.1 4 1.1s2.8-.4 4-1.1c1.2-.7 2.2-1.7 2.9-2.9.7-1.2 1.1-2.6 1.1-4s-.4-2.8-1.1-4zm-3.1 5.9c.1.1.2.3.2.5s-.1.4-.2.5l-.9.9c-.1.1-.3.2-.5.2s-.3-.1-.5-.2L8 9.9l-1.9 1.9c-.1.1-.3.2-.5.2s-.4-.1-.5-.2l-.9-.9c-.1-.2-.2-.4-.2-.5 0-.2.1-.3.2-.5L6.1 8 4.2 6.1C4.1 6 4 5.8 4 5.6s.1-.4.2-.5l.9-.9c.2-.1.4-.2.5-.2.2 0 .4.1.5.2L8 6.1l1.9-1.9c.1-.1.3-.2.5-.2s.4.1.5.2l.9.9c.1.2.2.4.2.5 0 .2-.1.3-.2.5L9.9 8l1.9 1.9z"
      />
    </svg>
  );
};
ErrorIcon = pure(ErrorIcon);
ErrorIcon.displayName = "ErrorIcon";
ErrorIcon.muiName = "SvgIcon";

export default ErrorIcon;
