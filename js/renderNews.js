import {renderNewsitem} from './renderElements.js';

export const renderHeadlinesNews = (data, newsCount) => {
  const template = document.createDocumentFragment();
  data.length = newsCount;

  const news = data.map(item => {
    const newsItem = renderNewsitem(item);

    return newsItem;
  });

  template.append(...news);

  return template;
};

export const renderRequestedNews = (data, newsCount) => {
  const template = document.createDocumentFragment();
  data.length = newsCount;

  const news = data.map(item => {
    const newsItem = renderNewsitem(item, true);

    return newsItem;
  });

  template.append(...news);

  return template;
};
