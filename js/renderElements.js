import {
  createNewsLi, createImg, createTitle, createText, createNewsData,
  createdateWrapper, createNewsDate, createNewsTime, createNewsAuthor,
  createArrow, createLink,
} from './createElements.js';
import {getDateFirmated, getTimeFormated} from './util.js';

const renderImg = (data) => {
  const img = createImg();
  if (data.urlToImage) {
    img.src = data.urlToImage;
  } else {
    img.src = '../img/no_foto.jpg';
  }

  return img;
};

const renderTtitle = (data) => {
  const title = createTitle();
  const link = createLink();
  link.href = data.url;
  link.textContent = data.title;

  title.append(link);

  return title;
};

const renderText = (data) => {
  const text = createText();
  text.textContent = data.description;

  return text;
};

const renderNewsDate = (data) => {
  const p = createNewsDate();
  const date = getDateFirmated(data);
  p.textContent = date;

  return p;
};

const renderNewsTime = (data) => {
  const p = createNewsTime();
  const time = getTimeFormated(data);
  p.textContent = time;

  return p;
};

const renderDateWrapper = (data) => {
  const dateWrapper = createdateWrapper();
  const newsDate = renderNewsDate(data);
  const newsTime = renderNewsTime(data);

  dateWrapper.append(newsDate);
  dateWrapper.append(newsTime);

  return dateWrapper;
};

const renderNewsAuthor = (data) => {
  const p = createNewsAuthor();
  p.textContent = data.author;

  return p;
};

const renderNewsData = (data) => {
  const newsData = createNewsData();
  const dateWrapper = renderDateWrapper(data);
  const author = renderNewsAuthor(data);

  newsData.append(dateWrapper);
  newsData.append(author);

  return newsData;
};

const renderArrow = (data) => {
  const arrow = createArrow();
  arrow.href = data.url;

  return arrow;
};

export const renderNewsitem = (data) => {
  const li = createNewsLi();
  const img = renderImg(data);
  const title = renderTtitle(data);
  const text = renderText(data);
  const newsData = renderNewsData(data);
  const arrow = renderArrow(data);

  li.append(img);
  li.append(title);
  li.append(text);
  li.append(newsData);
  li.append(arrow);

  return li;
};
