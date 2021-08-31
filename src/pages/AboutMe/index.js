import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import BasicContainer from "@components/BasicContainer";
import PageHeader from "@components/PageHeader";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textBox: {
    margin: theme.spacing(5, 0),
  },
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <BasicContainer>
      <PageHeader primary="About Me" secondary="Some facts about me" />
      <Typography variant="body1" className={classes.textBox}>
        I am Asher Chan, 18 years old. A software engineering student at Forward School.
      </Typography>
      <div className={classes.container}>
        <Typography variant="caption">{new Date().toString()}</Typography>
      </div>
    </BasicContainer>
  );
};

export default AboutMe;
