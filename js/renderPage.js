import {
  URL, API_KEY, HEADLINES__POSTFIX_DEFAULT, URL_SEARCH, REQUEST__POSTFIX,
  HEADLINES__POSTFIX, HEADLINES_NEWS_COUNT, REQUESTED_HEADLINES_NEWS_COUNT,
  REQUESTED_NEWS_COUNT,
} from './data.js';
import {
  wrapperHeadlineNews, headerSearchForm,
  requestSection, requestTitle, getWrapperRequestedNews,
} from './getElements.js';
import {renderNews} from './renderNews.js';
import {fetchRequest, showPreloader, hidePreloader} from './service.js';

export const initHeadlineNews = async () => {
  const headLineNews = await fetchRequest(HEADLINES__POSTFIX_DEFAULT, {
    callback: renderNews,
    headers: {
      'X-Api-Key': `${API_KEY}`,
    },
  }, URL, HEADLINES_NEWS_COUNT);

  wrapperHeadlineNews.append(headLineNews);
};

export const initRequestedNews = async () => {
  headerSearchForm.addEventListener('submit', async e => {
    e.preventDefault();
    requestSection.classList.add('request--visible');
    requestTitle.textContent = `По вашему запросу 
      ${headerSearchForm.search.value} найдены следующие результаты`;
    const wrapperRequestedNews = getWrapperRequestedNews();

    const newREquestPostfix =
      `${headerSearchForm.search.value}${REQUEST__POSTFIX}`;

    wrapperRequestedNews.innerHTML = '';
    wrapperHeadlineNews.innerHTML = '';
    const choosingCountry = headerSearchForm.country.value;
    const newHedlinesPostfix = `${HEADLINES__POSTFIX}${choosingCountry}`;

    const init = () => {
      showPreloader();
      return Promise.all([
        fetchRequest(newREquestPostfix, {
          callback: renderNews,
          headers: {
            'X-Api-Key': `${API_KEY}`,
          },
        }, URL_SEARCH, REQUESTED_NEWS_COUNT),

        fetchRequest(newHedlinesPostfix, {
          callback: renderNews,
          headers: {
            'X-Api-Key': `${API_KEY}`,
          },
        }, URL, REQUESTED_HEADLINES_NEWS_COUNT),
      ]);
    };

    init().then(data => {
      hidePreloader();
      wrapperRequestedNews.append(data[0]);
      wrapperHeadlineNews.append(data[1]);
    });
  });
};
