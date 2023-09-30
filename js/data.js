// export const API_KEY = 'beacfefc4ca04378b571804a5f2fe9f6';
// export const API_KEY = '1fef944d768b4e60a73eda9978543215';
export const API_KEY = 'a83dac9b593e4be185f93c6975dc1671';

export const URL = 'https://newsapi.org/v2/';
export const URL_SEARCH = `${URL}everything?q=`;

export const HEADLINES__POSTFIX = 'top-headlines?country=';
const HEADLINES__COUNTRY_DEFAULT = 'us';
export const HEADLINES__POSTFIX_DEFAULT =
  `${HEADLINES__POSTFIX}${HEADLINES__COUNTRY_DEFAULT}`;

export const REQUEST__POSTFIX = '&from=2023-09-28&sortBy=publishedAt';

export const HEADLINES_NEWS_COUNT = 8;
export const REQUESTED_HEADLINES_NEWS_COUNT = 4;
export const REQUESTED_NEWS_COUNT = 8;
