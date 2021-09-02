import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(3),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: theme.spacing(1),
  },
}));

const ImageCard = ({ icon, text }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <div className={classes.iconContainer}>{icon}</div>
      <Typography variant="subtitle1">{text}</Typography>
    </Paper>
  );
};

export default ImageCard;
