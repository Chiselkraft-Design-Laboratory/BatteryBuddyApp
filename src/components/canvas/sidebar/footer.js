import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Label from "../helpers/label";
import MakeQR from "../helpers/makeQR";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      flexBasis: 100,
      display: "flex",
      width: "100%",
      padding: theme.spacing(2, 3),
      background: theme.palette.L3,
      color: theme.palette.D3,
    },
  }),
  { index: 1 }
);

const SideBarFooter = ({ spec }) => {
  const cl = useStyles();
  return (
    <Grid item className={cl.root}>
      <Grid container direction="column" wrap="nowrap">
        <Grid item>
          <Grid container direction="row">
            <Label size={6} caption="chemistry" value={spec.cellChemistry} />
            <Label size={6} caption="capacity" value={spec.capacity} />
            <Label size={6} caption="cell manufacturer" value={spec.cellMake} />
            <Label
              size={6}
              caption="cell configuration"
              value={spec.cellConfig}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" wrap="nowrap">
            {spec.qrocode !== null ? (
              <Grid item>
                <MakeQR fields={spec.qrcode}></MakeQR>
              </Grid>
            ) : null}
            <Grid item xs>
              <Label caption="year" value={spec.mfd} />
              <Label caption="serial" value={spec.serial} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SideBarFooter;
