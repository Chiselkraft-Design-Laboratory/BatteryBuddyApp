import React from "react";
import {
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";

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
      minWidth: "100%",
      minHeight: 400,
    },
    fail: {
      color: theme.palette.T5,
      fill: theme.palette.T5,
      borderBottom: "none",
    },
    pass: {
      borderBottom: "none",
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
        <Table>
          <TableBody>
            {data.map((field, index) => (
              <TableRow key={index}>
                <TableCell
                  className={
                    field[Object.keys(field)] !== 0 ? cl.fail : cl.pass
                  }
                >
                  {Object.keys(field)}
                </TableCell>
                <TableCell
                  className={
                    field[Object.keys(field)] !== 0 ? cl.fail : cl.pass
                  }
                >
                  {field[Object.keys(field)] == 0 ? "PASS" : "FAIL"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        fallback
      )}
    </Grid>
  );
};

const ReportList = (list) => {
  // return <ListItem button>{Object.keys(list)}hello</ListItem>;
};

export default React.memo(DiagnosticsReport);
