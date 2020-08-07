import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 2),
    color: theme.palette.ui.lite3,
    "&:hover": {
      color: theme.palette.ui.seagreen,
    },
  },
  active: {
    color: theme.palette.ui.lite,
    pointerEvents: "none",
  },
}));

const Navlink = ({ text, icon, url }) => {
  const classes = useStyle();

  // let location = useLocation();
  const isActive = url === useLocation().pathname;

  return (
    <Link
      to={url}
      className={clsx(
        classes.root,
        isActive ? classes.active : classes.default,
        "MuiButtonBase-root"
      )}
      disabled={isActive}
    >
      {icon}
      {text}
    </Link>
  );
};

export default Navlink;
