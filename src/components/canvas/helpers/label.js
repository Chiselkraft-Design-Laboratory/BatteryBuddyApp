import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0.5, 0),
  },
  field: {
    fontWeight: 700,
    fontSize: "0.85rem",
  },
}));
const Label = ({ size, caption, value }) => {
  const cl = useStyle();
  return (
    <Grid item xs={size || "auto"} className={cl.root}>
      <Typography variant="caption">{caption}</Typography>
      <Typography classes={{ root: cl.field }} variant="body1">
        {value}
      </Typography>
    </Grid>
  );
};

export default Label;
