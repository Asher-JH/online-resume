import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";

import { THEME_COLORS } from "@vars/colors";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: THEME_COLORS.WHITE,
    padding: theme.spacing(2),
    borderRadius: 6,
    marginTop: theme.spacing(0),
    transition: "0.4s ease",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    border: `2px solid ${THEME_COLORS.DARK_GREY}`,
    boxShadow: `-8px 8px ${THEME_COLORS.LIGHT_GREY}`,
    transform: "translateY(-4px)",

    "&:hover": {
      boxShadow: "none",
      transform: "translateY(4px)",
      background: `${THEME_COLORS.LIGHT_GREY}90`,
      cursor: "pointer",
    },
  },
  iconTextContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    marginLeft: theme.spacing(2),
  },
}));

const SocialButton = ({ icon, text, url }) => {
  const classes = useStyles();

  const onClick = () => {
    window.open(url, "_blank");
    return;
  };

  return (
    <Paper className={classes.paper} elevation={0} onClick={onClick}>
      <div className={classes.iconTextContainer}>
        {icon}
        <Typography className={classes.text}>{text}</Typography>
      </div>
      <LaunchIcon />
    </Paper>
  );
};

export default SocialButton;
