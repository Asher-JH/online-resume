import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import BasicContainer from "@components/BasicContainer";
import PageHeader from "@components/PageHeader";
import ContactForm from "@components/Forms/Contact";
import SocialButton from "@components/SocialButton";
import { useSocialLinks } from "@data";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
  },
}));

const Contact = () => {
  const classes = useStyles();
  const socialLinks = useSocialLinks({ smallIcons: false });

  return (
    <BasicContainer>
      <PageHeader primary="Contact" secondary="Get in touch" />
      <ContactForm />
      <PageHeader primary="Socials" secondary="Other ways to get in touch" />
      <div className={classes.root}>
        <Grid container spacing={3}>
          {!!socialLinks?.length &&
            socialLinks.map((socialLink) => {
              return (
                <Grid key={socialLink.text} item xs={6} sm={4}>
                  <SocialButton {...socialLink} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </BasicContainer>
  );
};

export default Contact;
