import {headLineNewsCount} from './data.js';
const showError = (err, data = '') => {
  console.warn(err, data);
};


export const fetchRequest = async (postfix, {
  method = 'get',
  callback,
  body,
  headers,
}, URL) => {
  try {
    const options = {
      method,
    };

    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;

    const response = await fetch(`${URL}${postfix}`, options);

    if (response.ok) {
      let data = await response.json();
      data = data.articles;
      // console.log(data);
      console.log('data: ', data[1]);
      if (callback) return callback(data, headLineNewsCount);
      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    return showError(err);
  }
};

export default fetchRequest;
