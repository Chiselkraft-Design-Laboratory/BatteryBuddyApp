// import React from "react";
// import clsx from "clsx";
// import { makeStyles, Grid, Chip } from "@material-ui/core";

// const useStyles = makeStyles(
//   (theme) => ({
//     root: {
//       flexBasis: 100,
//       display: "flex",
//       width: "100%",
//       padding: theme.spacing(2, 3),
//     },
//     chip: {
//       alignItems: "center",
//       margin: theme.spacing(0.5),
//       textDecoration: "underline",
//       background: "none",
//     },
//     warn: {
//       color: theme.palette.T4,
//       fill: theme.palette.T4,
//     },
//     err: {
//       color: theme.palette.T5,
//       fill: theme.palette.T5,
//     },
//     ok: {
//       color: theme.palette.T3,
//       fill: theme.palette.T3,
//     },
//   }),
//   { index: 1 }
// );

// const SideBarAlert = ({ warnings, errors }) => {
//   const cl = useStyles();
//   return (
//     <Grid item className={cl.root}>
//       <Grid container direction="row" wrap="nowrap" justify="center">
//         <Grid item className={cl.center}>
//           {errors ? (
//             <Chip
//               className={clsx(cl.chip, cl.err)}
//               label={errors + " errors"}
//             />
//           ) : null}

//           {warnings ? (
//             <Chip
//               className={clsx(cl.chip, cl.warn)}
//               label={warnings + " warnings"}
//             />
//           ) : null}

//           {!errors && !warnings ? (
//             <Chip
//               className={clsx(cl.chip, cl.ok)}
//               label={"No Problems Found"}
//             />
//           ) : null}
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default SideBarAlert;


import React from "react";
import { makeStyles, Typography, Grid, Badge } from "@material-ui/core";
import withCanvas from "../withCanvas";
const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      width: "80%",
      padding: theme.spacing(1, 2.5),
      background: 'transparent',
      color:theme.palette.L1,
      marginBottom: "1px",
    alignSelf:'center'
    
    },
    caption:
    {
      color:theme.palette.T5,

      fontSize:'0.95rem',
      fontWeight:400
    },
    wrap:
    {
      alignItems:'center'
    }
  }),
  { index: 1 }
);

const SideBarAlert = ({ canvas, caption, value, suffix, alert }) => {
  const cl = useStyles(canvas.dense);
  return (
    <Grid item className={cl.root}>
      <Grid container direction="row" wrap="nowrap" classes={{root:cl.wrap}}>
        <Grid item xs>
          <Typography variant="body1"  classes={{root:cl.caption}}>{caption}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            {value}
            <small>{suffix}</small>
          </Typography>
        </Grid>
        <Grid item>
          {alert && <Badge className={cl.alert} color="error" variant="dot" />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withCanvas(SideBarAlert);

