import React from "react";

import BasicContainer from "@components/BasicContainer";
import PageHeader from "@components/PageHeader";
import ContactForm from "@components/Forms/Contact";

const AboutMe = () => {
  return (
    <BasicContainer>
      <PageHeader primary="Contact" secondary="Get in touch" />
      <ContactForm />
    </BasicContainer>
  );
};

export default AboutMe;
