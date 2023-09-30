export const wrapperHeadlineNews =
  document.querySelector('.headlines__news-wrapper');
export const headlinesSection = document.querySelector('.headlines');
export const requestSection = document.querySelector('.request');
export const requestTitle = requestSection.querySelector('.request__title');
export const headerSearchForm =
  document.querySelector('.header__form');
export const preloader = document.querySelector('.preloader');

export const getWrapperRequestedNews = () => {
  const wrapper = requestSection.querySelector('.request__news-wrapper');

  return wrapper;
};
