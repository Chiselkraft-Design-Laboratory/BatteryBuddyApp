import React from "react";
import { makeStyles, Box, Select, MenuItem, Button } from "@material-ui/core";
import { StopIcon, SaveIcon } from "../../../assets";

const useStyles = (logging) =>
  makeStyles(
    (theme) => ({
      root: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
      },
      expand: {
        flexGrow: 1,
      },
      select: {
        minWidth: 120,
      },
      btnlog: {
        padding: theme.spacing(1, 2),
        marginLeft: theme.spacing(2),
        background: logging ? theme.palette.T5 : theme.palette.T4,
        color: theme.palette.D2,
        fill: theme.palette.D2,
        "&:hover": {
          background: logging ? theme.palette.T5 : theme.palette.T4,
          color: theme.palette.D2,
          fill: theme.palette.D2,
          filter: "brightness(0.9)",
        },
      },
      btnsave: {
        padding: theme.spacing(1, 2),
        marginLeft: theme.spacing(2),
        background: theme.palette.L1,
        color: theme.palette.D2,
        fill: theme.palette.D2,
        "&:hover": {
          background: theme.palette.L1,
          color: theme.palette.D2,
          fill: theme.palette.D2,
          filter: "brightness(0.9)",
        },
      },
      btnLabel: {
        flexDirection: "row",
      },
    }),
    { index: 1 }
  );

const AnalyticsFooter = ({ logging, toggleLog, saveLog }) => {
  const cl = useStyles(logging)();
  return (
    <Box classes={{ root: cl.root }}>
      <Select
        disableUnderline
        defaultValue={0}
        disabled
        classes={{ root: cl.Select, input: cl.selectInput }}
      >
        <MenuItem value={0}>select metrics</MenuItem>
      </Select>
      <div className={cl.expand} />
      {logging && (
        <Button
          disableRipple
          classes={{ root: cl.btnsave, label: cl.btnLabel }}
          startIcon={<SaveIcon />}
          onClick={saveLog}
        >
          Save Log
        </Button>
      )}
      <Button
        disableRipple
        classes={{ root: cl.btnlog, label: cl.btnLabel }}
        startIcon={logging ? <StopIcon /> : undefined}
        onClick={toggleLog}
      >
        {logging ? "Stop Log" : "Generate Log"}
      </Button>
    </Box>
  );
};

export default AnalyticsFooter;
