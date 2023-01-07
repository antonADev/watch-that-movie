import { randomize } from '../../utils/helperFunctions';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = `https://api.themoviedb.org/3/`;
const lang = navigator.language;

export const fetchMovieList = (type, genre, providers) => {
  return fetch(
    `${baseURL}discover/${type}?api_key=${API_KEY}&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${
      genre.id
    }&with_watch_providers=${providers.map((provider, index) => {
      return `${index ? '|' : ''}${provider.id}`;
    })}&watch_region=IT&with_watch_monetization_types=flatrate`
  ).then((res) => res.json());
};

export const fetchRandomMovieFromList = (type, genre, providers, previousResult) => {
  return fetch(
    `https://api.themoviedb.org/3/discover/${type}?api_key=b4075be843e96cdf1d04055e2fee6ec7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomize(
      previousResult.total_pages
    )}&with_genres=${genre.id}&with_watch_providers=${providers.map((provider, index) => {
      return `${index ? '|' : ''}${provider.id}`;
    })}&watch_region=IT&with_watch_monetization_types=flatrate`
  ).then((res) => res.json());
};
