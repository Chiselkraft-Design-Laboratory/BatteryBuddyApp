import React from "react";
import {
  makeStyles,
  Grid,
  Box,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";

import { pageOptions } from "../../../constants/preferences";
const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(1.5),
    },
    wrapper: {
      padding: theme.spacing(5),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: theme.palette.T5,
      color: theme.palette.L1,
    },
    header: {
      transition: "all 0.4s ease-in",
      marginBottom: theme.spacing(2),
    },
    content: {
      transition: "all 0.4s ease-in",
      minHeight: pageOptions.minTileHeight,
      textAlign: "justify",
    },
    button: {
      marginTop: theme.spacing(3),
      background: theme.palette.L1,
      color: theme.palette.D2,
      "&:hover": {
        background: theme.palette.L2,
        color: theme.palette.D1,
      },
    },
  }),
  { index: 1 }
);

const SettingsDisclaimer = ({ onAccept }) => {
  const cl = useStyles();
  return (
    <Grid item xs={12} classes={{ root: cl.root }}>
      <Paper elevation={6} component="section" classes={{ root: cl.wrapper }}>
        <Box classes={{ root: cl.header }} component="header">
          <Typography variant="h6">Disclaimer</Typography>
        </Box>
        <Box classes={{ root: cl.content }} component="article">
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At
            auctor urna nunc id cursus metus aliquam. Semper feugiat nibh sed
            pulvinar proin gravida hendrerit. Lectus proin nibh nisl condimentum
            id venenatis a condimentum vitae. Pellentesque dignissim enim sit
            amet venenatis. Lectus mauris ultrices eros in cursus turpis massa.
            Ante in nibh mauris cursus mattis molestie a iaculis at. Justo eget
            magna fermentum iaculis eu. Nisl purus in mollis nunc sed id semper.
            Vitae ultricies leo integer malesuada nunc vel risus commodo
            viverra. Suscipit adipiscing bibendum est ultricies integer quis
            auctor. Mattis nunc sed blandit libero volutpat sed. Molestie nunc
            non blandit massa enim. Sed faucibus turpis in eu mi bibendum neque.
            Nulla facilisi cras fermentum odio eu feugiat. Ultrices mi tempus
            imperdiet nulla malesuada pellentesque. Faucibus in ornare quam
            viverra orci. Cras sed felis eget velit aliquet sagittis id
            consectetur. Duis ultricies lacus sed turpis tincidunt id aliquet
            risus. In nisl nisi scelerisque eu ultrices. Id cursus metus aliquam
            eleifend. In mollis nunc sed id semper. Fusce id velit ut tortor.
            Feugiat vivamus at augue eget arcu dictum varius duis at. Eget
            nullam non nisi est sit amet facilisis magna etiam. Faucibus purus
            in massa tempor nec feugiat nisl. Volutpat lacus laoreet non
            curabitur gravida arcu. Urna cursus eget nunc scelerisque viverra
            mauris. Egestas quis ipsum suspendisse ultrices gravida dictum fusce
            ut placerat. Mi eget mauris pharetra et ultrices neque ornare aenean
            euismod. Ultrices gravida dictum fusce ut placerat orci. Tellus
            rutrum tellus pellentesque eu tincidunt tortor. Nunc id cursus metus
            aliquam eleifend mi in nulla. Eu scelerisque felis imperdiet proin
            fermentum leo vel orci. Pulvinar sapien et ligula ullamcorper
            malesuada proin. Mi bibendum neque egestas congue. Et netus et
            malesuada fames ac turpis egestas sed. Eget nunc scelerisque viverra
            mauris in aliquam. Tempor id eu nisl nunc mi. Cursus vitae congue
            mauris rhoncus. Sed elementum tempus egestas sed sed risus pretium
            quam. Egestas sed tempus urna et. Sapien eget mi proin sed libero
            enim. Ornare suspendisse sed nisi lacus.
          </Typography>
        </Box>
        <Button classes={{ root: cl.button }} onClick={onAccept}>
          Accept and Contine
        </Button>
      </Paper>
    </Grid>
  );
};

export default SettingsDisclaimer;
