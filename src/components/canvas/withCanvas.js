import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";

// constants
import { UiBreakpoint } from "../constants/preferences";

const withCanvas = (Component) => {
  return (props) => {
    const canvasProps = {
      dense: useMediaQuery(useTheme().breakpoints.down(UiBreakpoint)),
    };
    return <Component {...props} canvas={canvasProps} />;
  };
};
export default withCanvas;
