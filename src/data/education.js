import HCHSLogo from "@assets/hchs-logo.jpg";
import FSLogo from "@assets/fs-logo.png";
import YTLogo from "@assets/youtube-logo.png";
import UdemyLogo from "@assets/udemy-logo.png";


/**
 * Data for education cards
 */
export const useEducationData = () => [
  {
    duration: "2015-2019",
    header: "Han Chiang High School",
    subtitle:
      "Located in Pulau Pinang. I managed to achieve 3A*, 4A, 1B for my IGCSE results.",
    img: HCHSLogo,
  },
  {
    duration: "2020-2022",
    header: "Forward School",
    subtitle:
      "Located in Pulau Pinang. I'm currently pursuing a Diploma in Software Engineering",
    img: FSLogo,
  },
  {
    duration: "2020->",
    header: "Youtube University",
    subtitle:
      "I stole the name from Choo Tze Sien, I attend free classes here daily and learn a great deal from many different people about all things Software Engineering",
    img: YTLogo,
  },
  {
    duration: "2020->",
    header: "Udemy",
    subtitle:
      "Managed to get a bunch of good detailed courses for good prices here",
    img: UdemyLogo,
  },
];

/**
 * Data for recommended youtube channels
 */
export const useYoutubeChannels = () => [
  {
    text: "Traversy Media",
    link: "https://www.youtube.com/c/TraversyMedia",
  },
  {
    text: "Web Dev Simplified",
    link: "https://www.youtube.com/c/WebDevSimplified",
  },
  {
    text: "freeCodeCamp",
    link: "https://www.youtube.com/c/Freecodecamp",
  },
  {
    text: "Rachel How",
    link: "https://www.youtube.com/c/RachelHow",
  },
  {
    text: "Dev Ed",
    link: "https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q",
  },
  {
    text: "Fireship",
    link: "https://www.youtube.com/c/Fireship",
  },
  {
    text: "Programming with Mosh",
    link: "https://www.youtube.com/c/programmingwithmosh",
  },
];

/**
 * Data for learning resources I use
 */
export const useLearningResources = () => [
  {
    text: "MDN Web Docs",
    link: "https://developer.mozilla.org/en-US/",
  },
  {
    text: "Stack Overflow",
    link: "https://stackoverflow.com/",
  },
  {
    text: "Medium",
    link: "https://medium.com/",
  },
  {
    text: "Dribble",
    link: "https://dribbble.com/",
  },
  {
    text: "Somewhere with all the answers",
    link: "https://www.google.com/",
  },
];
