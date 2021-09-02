import React from "react";

import BasicContainer from "@components/BasicContainer";
import PageHeader from "@components/PageHeader";
import ImageCardList from "@components/ImageCardList";
import { useTechnologiesData, useDesignTools } from "@data/skills";

const Skills = () => {
  const data = useTechnologiesData();
  const designToolsData = useDesignTools();

  return (
    <BasicContainer>
      <PageHeader
        primary="Frontend & Backend"
        secondary="Tools I use on a daily basis but have yet to master"
      />
      <ImageCardList data={data} />
      <PageHeader
        primary="Design & Productivity Tools"
        secondary="Software I use for designing and productivity tools to stay focused"
      />
      <ImageCardList data={designToolsData} />
    </BasicContainer>
  );
};

export default Skills;
