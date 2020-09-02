import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  makeStyles,
  BottomNavigationAction,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: (props) => props.dense && theme.spacing(2, 4),
      borderRadius: theme.spacing(4),
      transition: "all .5s ease-in-out",
      textDecoration: "none",
      color: theme.palette.D4,
      fill: theme.palette.D4,
      "&:hover": {
        color: theme.palette.T1,
        fill: theme.palette.T1,
        transition: "all .5s ease-in-out",
      },
      "&$selected": {
        color: theme.palette.L1,
        fill: theme.palette.L1,
        pointerEvents: "none",
      },
      "& > span": {
        flexDirection: (props) => !props.dense && "row",
      },
    },
    label: {
      padding: (props) => !props.dense && theme.spacing(0, 1),
    },
    selected: {},
    disabled: {
      color: theme.palette.D3,
      fill: theme.palette.D3,
      pointerEvents: "none",
    },
    regular: {
      flexDirection: "row",
    },
  }),
  { index: 1 }
);

const NavLink = ({ icon, label, url, disable, extended, simple }) => {
  const cl = useStyles({ dense: extended });
  const isActive = url === useLocation().pathname;
  return (
    <React.Fragment>
      {icon ? (
        <BottomNavigationAction
          component={Link}
          to={url}
          icon={icon}
          label={<Typography variant="body1">{label}</Typography>}
          selected={isActive}
          disabled={disable}
          showLabel={!extended}
          disableRipple
          classes={{
            root: cl.root,
            selected: cl.selected,
            label: cl.label,
          }}
          className={disable && cl.disabled}
        />
      ) : (
        <Link to={url} className={cl.root}>
          <Typography variant="body1">{label}</Typography>
        </Link>
      )}
    </React.Fragment>
  );
};

export default NavLink;
