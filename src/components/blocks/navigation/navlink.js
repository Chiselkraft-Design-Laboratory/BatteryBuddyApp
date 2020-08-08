import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

const useStyle = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(2),
      marginRight: theme.spacing(2),
      borderRadius: theme.spacing(1),
      textDecoration: "none",
    },
    icon: {
      marginRight: theme.spacing(1),
    },
    label: {
      fontSize: "1.28rem",
      textTransform: "Capitalize",
    },

    default: {
      fill: theme.palette.ui.dark4,
      color: theme.palette.ui.dark4,
      "&:hover": {
        fill: theme.palette.ui.seagreen,
        color: theme.palette.ui.seagreen,
      },
    },
    active: {
      color: theme.palette.ui.lite,
      fill: theme.palette.ui.lite,
      pointerEvents: "none",
    },
  }),
  { index: 1 }
);

const Navlink = ({ label, icon, url }) => {
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
      <div className={classes.icon}>{icon}</div>
      <Typography component="div" className={classes.label}>
        {label}
      </Typography>
    </Link>
  );
};

export default Navlink;
