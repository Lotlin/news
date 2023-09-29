import {
  URL, API_KEY, HEADLINES__POSTFIX_DEFAULT, URL_SEARCH, REQUEST__POSTFIX,
  HEADLINES__POSTFIX, HEADLINES_NEWS_COUNT, REQUESTED_HEADLINES_NEWS_COUNT,
  REQUESTED_NEWS_COUNT,
} from './data.js';
import {
  wrapperHeadlineNews, getAllHeadlinesLiNewsElem, headerSearchForm,
  requestSection, requestTitle, getWrapperRequestedNews,
} from './getElements.js';
import {renderHeadlinesNews, renderRequestedNews} from './renderNews.js';
import {fetchRequest, changeElemHeight} from './service.js';
import {getHighestRenderedElem} from './util.js';

export const initHeadlineNews = async () => {
  const headLineNews = await fetchRequest(HEADLINES__POSTFIX_DEFAULT, {
    callback: renderHeadlinesNews,
    headers: {
      'X-Api-Key': `${API_KEY}`,
    },
  }, URL, HEADLINES_NEWS_COUNT);

  wrapperHeadlineNews.append(headLineNews);
  const allHeadlinesLiNewsElem = getAllHeadlinesLiNewsElem();
  const maxScrollHeight = getHighestRenderedElem(allHeadlinesLiNewsElem);
  changeElemHeight(allHeadlinesLiNewsElem, maxScrollHeight);
};

export const initRequestedNews = async () => {
  headerSearchForm.addEventListener('submit', async e => {
    e.preventDefault();
    requestSection.classList.add('request--visible');
    requestTitle.textContent = `По вашему запросу 
      ${headerSearchForm.search.value} найдено
        ${REQUESTED_NEWS_COUNT} результатов`;
    const wrapperRequestedNews = getWrapperRequestedNews();

    const newREquestPostfix =
      `${headerSearchForm.search.value}${REQUEST__POSTFIX}`;

    wrapperRequestedNews.innerHTML = '';

    const headLineNews = await fetchRequest(newREquestPostfix, {
      callback: renderRequestedNews,
      headers: {
        'X-Api-Key': `${API_KEY}`,
      },
    }, URL_SEARCH, REQUESTED_NEWS_COUNT);

    wrapperRequestedNews.append(headLineNews);
  });

  headerSearchForm.addEventListener('submit', async e => {
    e.preventDefault();
    wrapperHeadlineNews.innerHTML = '';

    const choosingCountry = headerSearchForm.country.value;
    const newHedlinesPostfix = `${HEADLINES__POSTFIX}${choosingCountry}`;

    const headLineNews = await fetchRequest(newHedlinesPostfix, {
      callback: renderHeadlinesNews,
      headers: {
        'X-Api-Key': `${API_KEY}`,
      },
    }, URL, REQUESTED_HEADLINES_NEWS_COUNT);

    wrapperHeadlineNews.append(headLineNews);
  });
};
