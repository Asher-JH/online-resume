import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

import urls from "@vars/urls";

/**
 * Get Data for landing page explore sections
 */
export const useExploreSections = () => [
  {
    header: "About Me",
    subtitle: "Learn more about who I am and my goals in life",
    urlName: urls.PAGES.ABOUT_ME,
  },
  {
    header: "Learning Journey",
    subtitle: "Some background on my education",
    urlName: urls.PAGES.EDUCATION,
  },
  {
    header: "Work Experience",
    subtitle: "My previous and current work experience",
    urlName: urls.PAGES.WORK,
  },
  {
    header: "Tools",
    subtitle: "All the technologies and productivity tools I use",
    urlName: urls.PAGES.SKILLS,
  },
  {
    header: "Contact",
    subtitle: "Click here to get in touch with me",
    urlName: urls.PAGES.CONTACT,
  },
];

/**
 *  Get data for social buttons
 */
export const useSocialLinks = ({ smallIcons }) => {
  const props = {
    ...(!!smallIcons ? { fontSize: "small" } : {}),
  };

  return [
    {
      icon: <GitHubIcon {...props} />,
      text: "GitHub",
      url: "https://github.com/Asher-JH",
    },
    {
      icon: <InstagramIcon {...props} />,
      text: "Instagram",
      url: "https://www.instagram.com/_asherrrr_/",
    },
    {
      icon: <LinkedInIcon {...props} />,
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/asher-chan-b667531a6/",
    },
    {
      icon: <FacebookIcon {...props} />,
      text: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100010050316134",
    },
  ];
};
