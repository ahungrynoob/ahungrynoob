import fetch from 'unfetch';
import { Category } from 'typings';
import { getCookie } from './index';

function getQueryString(body: object) {
  let str = '?';
  Object.keys(body).forEach(val => {
    str += `${val}=${encodeURIComponent(`${body[val]}`)}&`;
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
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}

export const fetchArticles = (category: Category) =>
  fetchWrapper('/api/articles', 'GET', { category });

export const fetchArticle = (id: number) => fetchWrapper(`/api/articles/${id}`);

export default fetchWrapper;
