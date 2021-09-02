import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import BasicContainer from "@components/BasicContainer";
import PageHeader from "@components/PageHeader";
import EducationCard from "@components/EducationCard";
import Quote from "@components/Quote";
import List from "@components/List";
import {
  useEducationData,
  useYoutubeChannels,
  useLearningResources,
} from "@data/education";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    margin: theme.spacing(5, 0),
  },
}));

const Education = () => {
  const classes = useStyles();
  const educationData = useEducationData();
  const youtubeChannels = useYoutubeChannels();
  const learningResources = useLearningResources();

  return (
    <BasicContainer>
      <PageHeader
        primary="Education"
        secondary="A brief overview of my past education"
      />
      <div className={classes.container}>
        {!!educationData?.length &&
          educationData.map((educationProps) => (
            <EducationCard key={educationProps.header} {...educationProps} />
          ))}
      </div>
      <Quote
        quote="Once you stop learning, you start dying."
        author="Albert Einstein"
      />
      <PageHeader
        primary="Youtube Channels"
        secondary="My go-to Youtube channels for learning. Most are recommended by friends, teachers and mentor."
      />
      <List data={youtubeChannels} />
      <PageHeader
        primary="Learning Resources"
        secondary="Some websites I visit frequently while learning"
      />
      <List data={learningResources} />
    </BasicContainer>
  );
};

export default Education;
