import React from "react";
import { CssBaseline, Container } from "@material-ui/core";

const BasicContainer = ({ children, className }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className={className}>
        {children}
      </Container>
    </>
  );
};

export default BasicContainer;
