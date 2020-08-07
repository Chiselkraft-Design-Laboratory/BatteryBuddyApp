import React from "react";
import { makeStyles, ButtonBase } from "@material-ui/core";
import clsx from "clsx";

const useStyle = makeStyles((theme) => ({
  link: {
    padding: theme.spacing(1, 4),
    color: theme.palette.ui.lite3,
    "&:hover": {
      color: theme.palette.ui.seagreen,
    },
  },
  active: {
    color: theme.palette.ui.lite,
  },
}));

const Navlink = ({ text, icon, isActive }) => {
  const classes = useStyle();
  return (
    <ButtonBase
      component="a"
      className={clsx(classes.link, { [classes.active]: isActive })}
    >
      {icon}
      {text}
    </ButtonBase>
  );
};

export default Navlink;
