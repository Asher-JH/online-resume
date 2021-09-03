import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import BasicContainer from "@components/BasicContainer";
import PageHeader from "@components/PageHeader";
import Accordion from "@components/Accordion";
import List from "@components/List";
import { useAboutMeData, useTechData, useTopicsData } from "@data/about";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(5, 2),
  },
  topicsContainer: {
    marginTop: theme.spacing(3),
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  const data = useAboutMeData();
  const techData = useTechData();
  const topicsData = useTopicsData();

  return (
    <BasicContainer>
      <PageHeader
        primary="About Me"
        secondary="Learn about me and my career goals"
      />
      <div className={classes.container}>
        {!!data?.length &&
          data.map((item, index) => (
            <Accordion key={item.summary} id={`accordion${index}`} {...item} />
          ))}
      </div>
      <PageHeader
        primary="Interests"
        secondary="Software Engineering topics I'm interested in"
      />
      <div className={classes.topicsContainer}>
        <List data={techData} />
      </div>
      <PageHeader
        primary="Non-tech Interests"
        secondary="Things I like to do in my free time"
      />
      <div className={classes.topicsContainer}>
        <List data={topicsData} />
      </div>
    </BasicContainer>
  );
};

export default AboutMe;
