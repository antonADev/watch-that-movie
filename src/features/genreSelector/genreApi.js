import { apiOptions } from '../../utils/apiOptionsCall';
const baseURL = `https://api.themoviedb.org/3/`;
const lang = navigator.language;

export const fetchMovieGenres = () => {
  return fetch(`${baseURL}genre/movie/list?language=${lang}`, apiOptions)
    .then((res) => {
      if (!res.ok) throw new Error(`${res.statusText}`);

      return res.json();
    })
    .catch((error) => error);
};

export const fetchTvSeriesGenres = () => {
  return fetch(`${baseURL}genre/tv/list?language=${lang}`, apiOptions)
    .then((res) => {
      if (!res.ok) throw new Error(`${res.statusText}`);

      return res.json();
    })
    .catch((error) => error);
};
