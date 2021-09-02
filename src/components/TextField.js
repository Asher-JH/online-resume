import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField as MuiTextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: theme.spacing(4),
  },
  label: {
    fontWeight: 600,
  },
}));

const Input = withStyles({
  root: {
    background: "#fff",
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,

    "& input:valid + fieldset": {
      border: "none",
    },
    "& input:invalid + fieldset": {
      border: "none",
    },
    "& input:valid:focus + fieldset": {
      border: "none",
    },
  },
})(MuiTextField);

const TextField = ({
  label,
  value,
  type = "text",
  placeholder,
  name,
  multiline,
  rows,
  required,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" className={classes.label}>
        {label}
      </Typography>
      <Input
        name={name}
        required={required}
        variant="standard"
        type={type}
        fullWidth
        multiline
        rows={multiline && rows}
        value={value}
        placeholder={placeholder || ""}
      />
    </div>
  );
};

export default TextField;
