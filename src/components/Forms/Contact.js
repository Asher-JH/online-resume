import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

import TextField from "@components/TextField";
import PrimaryButton from "@components/PrimaryButton";
import { THEME_COLORS } from "@vars/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 0),
    border: `2px solid ${THEME_COLORS.DARK_GREY}`,
    boxShadow: `-8px 8px ${THEME_COLORS.LIGHT_GREY}`,
    transform: "translateY(-4px)",
  },
  form: {
    padding: theme.spacing(0, 8, 8, 8),

    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 4, 4, 4),
    },
  },
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8),
    fontSize: "24px",
    fontWeight: 600,
  },
  paragraph: {
    fontSize: "14px",
    fontWeight: 300,
  },
}));

const ContactForm = () => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <form className={classes.form}>
        <Typography className={classes.title}>
          Leave a message and I'll get back to you.
        </Typography>
        <TextField label="Name" required placeholder="Jon Snow" />
        <TextField label="Email" required placeholder="jonsnow@gmail.com" />
        <TextField label="Phone Number" placeholder="012-XXX XXXX" />
        <TextField
          label="Message"
          placeholder="Winter is coming..."
          multiline
          rows={4}
        />
        <PrimaryButton
          fullWidth
          type="submit"
          label="Send"
          icon={<SendIcon />}
        />
      </form>
    </Paper>
  );
};

export default ContactForm;
