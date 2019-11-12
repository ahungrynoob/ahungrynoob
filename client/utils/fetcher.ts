import fetch from 'unfetch';
import { getCookie } from './index';
import { Category } from 'typings';

function getQueryString(body: object) {
  let str = '?';
  Object.keys(body).forEach((val) => {
    str += val + '=' + encodeURIComponent(body[val] + '') + '&';
  });
  str = str.slice(0, -1);
  return str;
}

function fetchWrapper(url: string, method: string = 'GET', body?: object) {
  let queryString = '';
  if (method === 'GET' && body) {
    queryString = getQueryString(body);
  }
  return fetch(url + queryString, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'x-csrf-token': getCookie('csrfToken'),
    },
    method,
    body: method !== 'GET' && body && JSON.stringify(body),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      const error = new Error(response.statusText);
      return Promise.reject(error);
    }
  });
}

export const fetchArticles = (category: Category) => {
  return fetchWrapper('/api/articles', 'GET', { category });
};

export default fetchWrapper;
