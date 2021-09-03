import React from "react";
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { THEME_COLORS } from "@vars/colors";

const StyledAccordion = withStyles((theme) => ({
  root: {
    width: "100%",
    background: THEME_COLORS.WHITE,
    padding: theme.spacing(2),
    borderRadius: 6,
    border: `2px solid ${THEME_COLORS.DARK_GREY}`,
    boxShadow: `-8px 8px ${THEME_COLORS.LIGHT_GREY}`,
    transform: "translateY(-4px)",
    marginBottom: theme.spacing(3),

    "&:before": {
      display: "none",
    },
  },
  expanded: {},
}))(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const Accordion = ({ id, summary, details }) => {
  return (
    <StyledAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id={`${id}-content`}>
        <Typography variant="h6">{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1">{details}</Typography>
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default Accordion;
