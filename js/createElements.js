export const createNewsLi = () => {
  const li = document.createElement('li');
  li.className = 'news__item';

  return li;
};

export const createImg = () => {
  const img = new Image();
  img.className = 'news__img';
  img.alt = 'фото для иллюстрации новости';
  img.style.objectFit = 'cover';
  img.loading = 'lazy';

  return img;
};

export const createTitle = () => {
  const h2 = document.createElement('h2');
  h2.className = 'news__title';

  return h2;
};

export const createLink = () => {
  const link = document.createElement('a');
  link.target = '_blank';

  return link;
};

export const createText = () => {
  const text = document.createElement('p');
  text.className = 'news__text';

  return text;
};

export const createNewsData = () => {
  const div = document.createElement('div');
  div.className = 'news__data';

  return div;
};

export const createdateWrapper = () => {
  const div = document.createElement('div');
  div.className = 'news__data-date-wrapper';

  return div;
};

export const createNewsDate = () => {
  const p = document.createElement('p');
  p.className = 'news__data-date';

  return p;
};

export const createNewsTime = () => {
  const p = document.createElement('p');
  p.className = 'news__data-time';

  return p;
};

export const createNewsAuthor = () => {
  const p = document.createElement('p');
  p.className = 'news__data-author';

  return p;
};

export const createArrow = () => {
  const div = document.createElement('a');
  div.className = 'news__arrow';

  return div;
};
