import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { THEME_COLORS } from "vars/colors";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(1.5),
    background: THEME_COLORS.PRIMARY_BLACK,
    color: THEME_COLORS.WHITE,
    border: `2px solid ${THEME_COLORS.PRIMARY_BLACK}`,
    transition: ".3s ease",

    "&:hover": {
      boxShadow: "none",
      background: `${THEME_COLORS.PRIMARY_BLACK}90`,
    },
  },
}));

const PrimaryButton = ({ label, icon, fullWidth }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      fullWidth={fullWidth}
      className={classes.button}
      endIcon={icon}
    >
      <Typography variant="button">{label}</Typography>
    </Button>
  );
};

export default PrimaryButton;
