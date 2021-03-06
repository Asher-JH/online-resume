import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { THEME_COLORS } from "@vars/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    color: THEME_COLORS.PRIMARY_BLACK,
    fontSize: "14px",
    fontWeight: 600,
    margin: theme.spacing(0, 1),
    textDecoration: "none",
    padding: theme.spacing(1),
    borderRadius: 5,
    transition: "0.2s ease",

    "&:hover": {
      background: THEME_COLORS.LIGHT_GREY,
    },
  },
}));

const TextButton = ({ label, to }) => {
  const classes = useStyles();

  return (
    <Typography component={Link} to={to} className={classes.root}>
      {label}
    </Typography>
  );
};

export default TextButton;
