import React from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  Button,
} from "@material-ui/core";

import withCanvas from "../../withCanvas";
import { pageOptions } from "../../../constants/preferences";

const useStyles = (dense) =>
  makeStyles(
    (theme) => ({
      root: {
        padding: theme.spacing(1.5),
      },
      wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyItems: "flex-start",
        alignItems: "stretch",
      },
      presets: {
        // height: "100%",
        justifyContent: "flex-start",
        borderRadius: theme.spacing(2),
        background: theme.palette.D3,
        color: theme.palette.L1,
        display: "flex",
        flexDirection: "column",
        justifyItems: "stretch",
      },
      content: {
        transition: "all 0.4s ease-in",
        minHeight: pageOptions.minTileHeight,
        display: "flex",
        flexDirection: "column",
        "& > *": {
          padding: theme.spacing(3),
        },
      },
      header: {
        padding: theme.spacing(2, 3),
        // marginBottom: theme.spacing(3),
        transition: "all 0.4s ease-in",
      },
      expand: {
        flexGrow: 1,
      },
      btnsave: {
        margin: theme.spacing(1, 3),
        background: theme.palette.L1,
        color: theme.palette.D2,
        transition: "background 0.35s ease-in-out",
        "&:hover": {
          background: theme.palette.L2,
          color: theme.palette.D1,
        },
      },
      btnrestore: {
        margin: theme.spacing(0, 3, 2, 3),
        background: theme.palette.D4,
        color: theme.palette.L1,
        transition: "background 0.35s ease-in-out",
        "&:hover": {
          background: theme.palette.D2,
          color: theme.palette.L1,
        },
      },
    }),
    { index: 1 }
  );

const SettingsTile = ({
  canvas,
  presets,
  children,
  applySetting,
  restoreSetting,
}) => {
  const cl = useStyles(canvas.dense)();
  // console.log("presets", presets);

  return (
    <Grid item xs={12} md classes={{ root: cl.root }}>
      <Paper elevation={6} component="section" classes={{ root: cl.wrapper }}>
        <Grid item xs={12} md={3} classes={{ root: cl.presets }}>
          <Typography variant="h6" classes={{ root: cl.header }}>
            Settings
          </Typography>
          <List
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                presets
              </ListSubheader>
            }
          >
            {presets &&
              presets.map((preset) => {
                return (
                  <ListItem button key={preset}>
                    <ListItemText>{preset}</ListItemText>
                  </ListItem>
                );
              })}
          </List>
          <div className={cl.expand} />
          <Button classes={{ root: cl.btnsave }}>Save Settings</Button>
          <Button classes={{ root: cl.btnrestore }}>Restore</Button>
        </Grid>
        <Grid item xs classes={{ root: cl.content }}>
          {children}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default withCanvas(SettingsTile);
