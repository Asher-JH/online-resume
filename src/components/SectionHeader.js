import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(6, 2),
  },
  primaryText: {
    fontWeight: "bold",
  },
  secondaryText: {
    fontWeight: 500,
    fontSize: "14px",
  },
}));

const SectionHeader = ({ primaryText, secondaryText }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom className={classes.primaryText}>
        {primaryText}
      </Typography>
      <Typography variant="p" className={classes.secondaryText}>
        {secondaryText}
      </Typography>
    </div>
  );
};

export default SectionHeader;
