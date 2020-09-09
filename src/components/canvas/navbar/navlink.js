import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  makeStyles,
  BottomNavigationAction,
  Typography,
  Link as SimpleLink,
} from "@material-ui/core";

const useStyles = (extended) =>
  makeStyles(
    (theme) => ({
      root: {
        transition: "all 0.4s ease-in",
        textDecoration: "none",
        color: theme.palette.D4,
        fill: theme.palette.D4,
        "&:hover": {
          color: theme.palette.T1,
          fill: theme.palette.T1,
          transition: "all 0.4s ease-in",
        },
        "&$selected": {
          color: theme.palette.L1,
          fill: theme.palette.L1,
          pointerEvents: "none",
        },
        "& > span": {
          flexDirection: !extended && "row",
        },
      },
      label: {
        padding: !extended && theme.spacing(0, 1),
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

const NavLink = ({ icon, label, url, disable, extended, simple, newtab }) => {
  const cl = useStyles(extended)();
  const isActive = url === useLocation().pathname;
  return (
    <React.Fragment>
      {simple ? (
        <SimpleLink
          underline="none"
          href={url}
          className={cl.root}
          target={newtab && "_blank"}
        >
          {icon && <div className={cl.icon}>{icon}</div>}
          {label && <Typography variant="body1">{label}</Typography>}
        </SimpleLink>
      ) : (
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
      )}
    </React.Fragment>
  );
};

export default NavLink;
