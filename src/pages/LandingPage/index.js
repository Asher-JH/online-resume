import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import BasicContainer from "@components/BasicContainer";
import Jumbotron from "@components/Jumbotron";
import User from "@assets/user.jpg";

import ExploreSection from "./ExploreSection";

const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      textAlign: "center",
    },
  },
  span: {
    fontSize: "28px",
    fontWeight: "bold",

    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  jumbotron: {
    marginBottom: theme.spacing(2),
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <BasicContainer>
        <Jumbotron
          className={classes.jumbotron}
          image={User}
          primaryElement={
            <Typography variant="h6" className={classes.header}>
              A <span className={classes.span}>Software Engineering</span>{" "}
              student from Pulau Pinang, MY
            </Typography>
          }
          secondaryText="Hello, I'm Asher 👋"
        />
      </BasicContainer>
      <ExploreSection />
    </>
  );
};

export default LandingPage;
