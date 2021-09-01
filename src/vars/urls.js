/*
 ** URLS for react-router
 */

const routes = () => {
  const ROOT = "/-";

  const getRoute = name => `${ROOT}/${name}`

  return {
    ROOT,
    ABOUT_ME: getRoute('about-me'),
    SOCIAL_LINKS: getRoute('social-links'),
    GALLERY: getRoute('gallery'),
    CONTACT: getRoute('contact'),
    EDUCATION: getRoute('education'),
  };
};

const urls = {
  ROOT: "/",
  PAGES: routes(),
};

export default urls;
