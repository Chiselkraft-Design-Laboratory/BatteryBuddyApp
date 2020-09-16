import React from "react";
import pure from "recompose/pure";

let SaveIcon = (props) => {
  return (
    <svg
      version="1.1"
      id="save-icon"
      viewBox="0 0 24 24"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={props.size || 24}
      height={props.size || 24}
    >
      <path
        fill={props.color || "inherit"}
        d="M12 16a.7488.7488 0 0 1-.542-.232l-5.25-5.5C5.753 9.792 6.091 9 6.75 9H9.5V3.25c0-.689.561-1.25 1.25-1.25h2.5c.689 0 1.25.561 1.25 1.25V9h2.75c.659 0 .997.792.542 1.268l-5.25 5.5A.7488.7488 0 0 1 12 16zM22.25 22H1.75C.785 22 0 21.215 0 20.25v-.5C0 18.785.785 18 1.75 18h20.5c.965 0 1.75.785 1.75 1.75v.5c0 .965-.785 1.75-1.75 1.75z"
      />
    </svg>
  );
};
SaveIcon = pure(SaveIcon);
SaveIcon.displayName = "SaveIcon";
SaveIcon.muiName = "SvgIcon";

export default SaveIcon;
