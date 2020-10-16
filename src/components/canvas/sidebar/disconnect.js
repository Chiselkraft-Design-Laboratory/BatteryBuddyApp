import React,{useState,useEffect} from "react";
import { makeStyles, Button, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      flexBasis: 100,
      display: "flex",
      width: "100%",
      padding: theme.spacing(2, 3),
      marginBottom: theme.spacing(2),
    },
    button: {
      padding: theme.spacing(1, 3),
      background: theme.palette.T5,
      borderRadius: theme.spacing(0.5),
      "&:hover": {
        background: theme.palette.T5,
        opacity: 0.8,
      },
    },
    button1: {
      padding: theme.spacing(1, 3),
      background: theme.palette.T1,
      borderRadius: theme.spacing(0.5),
      "&:hover": {
        background: theme.palette.T1,
        opacity: 0.8,
      },
    },
  }),
  { index: 1 }
);

const SideBarDisconnect = ({ action,isConnected }) => {
  const cl = useStyles();
 const  [buttonText,setbuttonText]=useState('Disconnect')

  useEffect( () => {

    isConnected==1?setbuttonText('Disconnect'):setbuttonText('Connect')
    


  }, [isConnected]);
  return (
    <Grid item className={cl.root}>
      <Grid container direction="row" wrap="nowrap" justify="center">
        <Grid item>
          <Button onClick={action} className={isConnected==1?cl.button:cl.button1}>
             <Typography variant="h6">{buttonText}</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SideBarDisconnect;
