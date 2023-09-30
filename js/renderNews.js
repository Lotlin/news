import {renderNewsitem} from './renderElements.js';

export const renderNews = (data, newsCount) => {
  const template = document.createDocumentFragment();

  if (data.length > newsCount) {
    data.length = newsCount;
  }

  const news = data.map(item => {
    const newsItem = renderNewsitem(item);

    return newsItem;
  });

  template.append(...news);

  return template;
};
