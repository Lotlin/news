export const wrapperHeadlineNews =
  document.querySelector('.headlines__news-wrapper');
export const requestSection = document.querySelector('.request');
export const requestTitle = requestSection.querySelector('.request__title');
export const headerSearchForm =
  document.querySelector('.header__form');

export const getAllHeadlinesLiNewsElem = () => {
  const allHeadlinesLiNewsElem =
    document.querySelectorAll('.headlines__news-item');

  return allHeadlinesLiNewsElem;
};

export const getWrapperRequestedNews = () => {
  const wrapper = requestSection.querySelector('.request__news-wrapper');

  return wrapper;
}
