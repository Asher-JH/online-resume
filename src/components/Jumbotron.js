import React from "react";
import clsx from "clsx";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(0),
    flexDirection: "row",

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    width: "40%",
    padding: theme.spacing(4),
    overflow: "hidden",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: theme.spacing(2),
    },
  },
  image: {
    height: "300px",
    width: "100%",
    borderRadius: 10,
    backgroundImage: ({ url }) =>
      `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  textContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: theme.spacing(2),
    },
  },
  minorText: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      fontSize: "12px",
      textAlign: "center",
    },
  },
}));

const Jumbotron = ({
  image,
  primaryText,
  secondaryText,
  primaryElement,
  className,
}) => {
  const classes = useStyles({ url: image });

  return (
    <div className={clsx(classes.root, className && className)}>
      <Paper className={classes.paper} elevation={0}>
        <div className={classes.image} />
      </Paper>
      <div className={classes.textContainer}>
        <Typography variant="p" gutterBottom className={classes.minorText}>
          {secondaryText}
        </Typography>
        {!!primaryElement ? (
          primaryElement
        ) : (
          <Typography variant="h4">{primaryText}</Typography>
        )}
      </div>
    </div>
  );
};

export default Jumbotron;
