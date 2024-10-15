import { apiOptions } from '../../utils/apiOptionsCall';
const baseURL = `https://api.themoviedb.org/3/`;
const lang = navigator.language;

export const fetchInitialTvShowList = () => {
  return fetch(`${baseURL}tv/popular?language=${lang}&page=1`, apiOptions).then((res) => {
    if (!res.ok) throw new Error(`${res.statusText}`);
    return res.json();
  });
};

export const fetchMoreTvShowList = (page) => {
  return fetch(`${baseURL}tv/popular?language=${lang}&page=${page}`, apiOptions).then((res) => {
    if (!res.ok) throw new Error(`${res.statusText}`);
    return res.json();
  });
};
