import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import BasicContainer from "@components/BasicContainer";
import PageHeader from "@components/PageHeader";
import WorkCard from "@components/WorkCard";
import Testimonial from "@components/Testimonial";
import { useWorkExperienceData, useTestimonialData } from "@data/work";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(5, 0),
    flexGrow: 1,
  },
  testimonialsContainer: {
    marginTop: theme.spacing(3),
  },
}));

const Work = () => {
  const classes = useStyles();
  const workExperienceData = useWorkExperienceData();
  const testimonials = useTestimonialData();

  return (
    <BasicContainer>
      <PageHeader
        primary="Work Experience"
        secondary="A brief overview of my past and current work experience"
      />
      <div className={classes.container}>
        <Grid container spacing={3}>
          {!!workExperienceData?.length &&
            workExperienceData.reverse().map((item) => (
              <Grid item key={item.duration} xs={12} sm={6}>
                <WorkCard {...item} />
              </Grid>
            ))}
        </Grid>
      </div>
      <PageHeader
        primary="Referees"
        secondary="Testimonials from teachers & employers"
      />
      <div className={classes.testimonialsContainer}>
        {!!testimonials?.length &&
          testimonials.map((testimonial, index) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
      </div>
    </BasicContainer>
  );
};

export default Work;
