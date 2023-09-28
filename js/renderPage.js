import {URL, API_KEY, HEADLINES__POSTFIX} from './data.js';
import {headlinesUl} from './getElements.js';
import {renderHeadlinesNews} from './renderNews.js';
import {fetchRequest} from './service.js';


const wrapperHeadlineNews = headlinesUl;

export const initHeadlineNews = async () => {
  const headLineNews = await fetchRequest(HEADLINES__POSTFIX, {
    callback: renderHeadlinesNews,
    headers: {
      'X-Api-Key': `${API_KEY}`,
    },
  }, URL);

  wrapperHeadlineNews.append(headLineNews);
};
