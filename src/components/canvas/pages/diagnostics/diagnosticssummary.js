import React from "react";
import { Grid, Box, makeStyles, Typography, Button } from "@material-ui/core";

const useStyles = (accent) =>
  makeStyles(
    (theme) => ({
      root: {
        height: "100%",
        justifyContent: "space-around",
        padding: theme.spacing(2, 3),
        borderRadius: theme.spacing(2),
        background:
          accent === 1
            ? theme.palette.T3
            : accent === 0
            ? theme.palette.T4
            : theme.palette.T5,
        color: theme.palette.L1,
      },
      heading: {
        marginBottom: theme.spacing(3),
      },
      dark: {
        color: theme.palette.D2,
      },
      title: {
        textTransform: "capitalize",
        fontSize: "2rem",
        fontWeight: 900,
      },
      btnretry: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1, 3),
        background: theme.palette.L1,
        color: theme.palette.D2,
        borderRadius: theme.spacing(0.5),
        "&:hover": {
          background: theme.palette.L1,
          opacity: 0.8,
        },
      },
      btnsave: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1, 3),
        background: theme.palette.D2,
        color: theme.palette.L1,
        borderRadius: theme.spacing(0.5),
        "&:hover": {
          background: theme.palette.D2,
          opacity: 0.8,
        },
      },
      expand: {
        flexGrow: 1,
      },
    }),
    { index: 1 }
  );

const DiagnosticsSummary = ({ summary, accent, onRetry, onSave }) => {
  const cl = useStyles(accent)();
  return (
    <React.Fragment>
      {accent !== undefined && (
        <Grid item xs={12} md={4} lg={3}>
          <Grid container direction="column" classes={{ root: cl.root }}>
            <Grid container>
              <Grid item xs={12} classes={{ root: cl.heading }}>
                <Typography variant="h6">Battery is</Typography>
                <Typography variant="h4" classes={{ root: cl.title }}>
                  <strong>{summary.health}</strong>
                </Typography>
              </Grid>
              <Grid item xs={6} classes={{ root: cl.dark }}>
                <Typography variant="caption">charge cycles</Typography>
                <Typography variant="h6" classes={{ root: cl.title }}>
                  <strong>{summary.cycles}</strong>
                </Typography>
              </Grid>
              <Grid item xs={6} classes={{ root: cl.dark }}>
                <Typography variant="caption">health</Typography>
                <Typography variant="h6" classes={{ root: cl.title }}>
                  <strong>{summary.index}</strong>
                </Typography>
              </Grid>
            </Grid>

            <Grid container direction="column">
              <Button classes={{ root: cl.btnretry }} onClick={onRetry}>
                Retry Diagnostics
              </Button>
              <Button classes={{ root: cl.btnsave }} onClick={onSave}>
                Save Report
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default DiagnosticsSummary;
