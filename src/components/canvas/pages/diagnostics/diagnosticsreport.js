import React from "react";
import { Grid, List, ListItem, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      minHeight: 440,
      padding: theme.spacing(3),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.L1,
    },
    list: {
      width: "100%",
    },
  }),
  { index: 1 }
);

const DiagnosticsReport = ({ data, fallback }) => {
  const cl = useStyles();
  // console.log("data", data);
  return (
    <Grid item xs={12} md classes={{ root: cl.root }}>
      {data ? (
        <List classes={{ root: cl.list }}>
          {console.log("data", data)}
          {JSON.stringify(data)}
        </List>
      ) : (
        fallback
      )}
    </Grid>
  );
};

const ReportList = (list) => {
  return <ListItem button>{Object.keys(list)}hello</ListItem>;
};

export default React.memo(DiagnosticsReport);
