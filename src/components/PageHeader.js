import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  primary: {
    fontWeight: "600",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const PageHeader = ({ primary, secondary }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom className={classes.primary}>
        {primary}
      </Typography>
      {!!secondary && <Typography variant="subtitle2">{secondary}</Typography>}
    </div>
  );
};

export default PageHeader;
