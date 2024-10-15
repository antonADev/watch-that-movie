import { apiOptions } from '../../utils/apiOptionsCall';
const baseURL = `https://api.themoviedb.org/3/`;
const lang = navigator.language;

export const fetchInitialMovieList = () => {
  return fetch(`${baseURL}movie/popular?language=${lang}&page=1`, apiOptions).then((res) => {
    if (!res.ok) throw new Error(`${res.statusText}`);
    return res.json();
  });
};

export const fetchMoreMovieList = (page) => {
  return fetch(`${baseURL}movie/popular?language=${lang}&page=${page}`, apiOptions).then((res) => {
    if (!res.ok) throw new Error(`${res.statusText}`);
    return res.json();
  });
};
