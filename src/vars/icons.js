import {
  SiJavascript,
  SiPython,
  SiNextDotJs,
  SiTypescript,
  SiMaterialUi,
  SiNodeDotJs,
  SiMongodb,
  SiGraphql,
  SiBootstrap,
  SiJava,
  SiGit,
  SiFigma,
  SiReact,
  SiVisualstudiocode,
  SiNotion,
  SiAdobexd,
} from "react-icons/si";

import { THEME_COLORS } from "./colors";

const iconSize = 40;

export const icons = {
  javascript: (
    <SiJavascript size={iconSize} style={{ fill: THEME_COLORS.JS }} />
  ),
  react: <SiReact size={iconSize} style={{ fill: THEME_COLORS.REACT }} />,
  python: <SiPython size={iconSize} style={{ fill: THEME_COLORS.PYTHON }} />,
  next: <SiNextDotJs size={iconSize} style={{ fill: THEME_COLORS.NEXT }} />,
  ts: <SiTypescript size={iconSize} style={{ fill: THEME_COLORS.TS }} />,
  mui: <SiMaterialUi size={iconSize} style={{ fill: THEME_COLORS.MUI }} />,
  nodejs: <SiNodeDotJs size={iconSize} style={{ fill: THEME_COLORS.NODE }} />,
  mongo: <SiMongodb size={iconSize} style={{ fill: THEME_COLORS.MONGO }} />,
  gql: <SiGraphql size={iconSize} style={{ fill: THEME_COLORS.GQL }} />,
  bootstrap: (
    <SiBootstrap size={iconSize} style={{ fill: THEME_COLORS.BOOTSTRAP }} />
  ),
  java: <SiJava size={iconSize} style={{ fill: THEME_COLORS.JAVA }} />,
  figma: <SiFigma size={iconSize} style={{ fill: THEME_COLORS.FIGMA }} />,
  vscode: (
    <SiVisualstudiocode size={iconSize} style={{ fill: THEME_COLORS.VSCODE }} />
  ),
  notion: <SiNotion size={iconSize} style={{ fill: THEME_COLORS.NOTION }} />,
  git: <SiGit size={iconSize} style={{ fill: THEME_COLORS.GIT }} />,
  adobeXD: (
    <SiAdobexd size={iconSize} style={{ fill: THEME_COLORS.ADOBE_XD }} />
  ),
};
