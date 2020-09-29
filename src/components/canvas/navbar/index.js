import React from "react";
import clsx from "clsx";
import { makeStyles, Toolbar, Box } from "@material-ui/core";
import withCanvas from "../withCanvas";
import NavGroup from "./navgroup";
import NavLink from "./navlink";
import { BrandIcon } from "../../assets";
import { sidebarOptions } from "../../constants/preferences";
import NavSelect from "./navselect";

const useStyles = (dense) =>
  makeStyles(
    (theme) => ({
      root: {},
      extended: {
        justifyContent: "space-around",
        justifyItems: "center",
      },
      expand: {
        flexGrow: 1,
      },
      fit: {
        flexShrink: 1,
      },
      brand: {
        flexShrink: 1,
        padding: theme.spacing(1, 2, 1, 0),
        minWidth: !dense && sidebarOptions.width,
      },
    }),
    { index: 1 }
  );

const NavBar = ({ showlinks, canvas }) => {
  const cl = useStyles(canvas.dense)();
  return (
    <React.Fragment>
      <Toolbar classes={{ root: cl.root }}>
        <Box classes={{ root: clsx(cl.brand, cl.fit) }}>
          <BrandIcon size={canvas.dense ? 64 : 80} />
        </Box>
        {!canvas.dense && showlinks ? (
          <Box classes={{ root: cl.fit }}>{<NavGroup />}</Box>
        ) : null}
        <div className={cl.expand} />
        <NavSelect />
        {/* <Box classes={{ root: cl.fit }}>
          <NavLink simple label="Help" url="#" />
        </Box> */}
      </Toolbar>
      {canvas.dense && showlinks ? (
        <Toolbar disableGutters classes={{ root: cl.extended }}>
          <NavGroup extended />
        </Toolbar>
      ) : null}
    </React.Fragment>
  );
};

export default withCanvas(NavBar);
