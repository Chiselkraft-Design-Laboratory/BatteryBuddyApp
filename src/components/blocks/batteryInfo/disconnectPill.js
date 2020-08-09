import React from "react";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    button: {
      padding: theme.spacing(1, 2.5),
      background: theme.palette.ui.danger,
      borderRadius: theme.spacing(0.5),
    },
  }),
  { index: 1 }
);
const DisconnectPill = (props) => {
  const classes = useStyle();
  return (
    <Grid item className={classes.root}>
      <Grid container direction="row" wrap="nowrap" justify="center">
        <Grid item>
          <Button>
            <Typography className={classes.button} variant="h6">
              Disconnect
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DisconnectPill;
