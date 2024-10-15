import { randomize } from '../../utils/helperFunctions';
import { apiOptions } from '../../utils/apiOptionsCall';
const baseURL = `https://api.themoviedb.org/3/`;
const lang = navigator.language;

export const fetchMovieList = (type, genre, providers) => {
  return fetch(
    `${baseURL}discover/${type}?language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${
      genre.id
    }&with_watch_providers=${providers.map((provider, index) => {
      return `${index ? '|' : ''}${provider.id}`;
    })}&watch_region=IT&with_watch_monetization_types=flatrate`,
    apiOptions
  ).then((res) => {
    if (!res.ok) throw new Error(`${res.statusText}`);
    return res.json();
  });
};

export const fetchRandomMovieFromList = (type, genre, providers, previousResult) => {
  return fetch(
    `https://api.themoviedb.org/3/discover/${type}?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomize(
      previousResult.total_pages
    )}&with_genres=${genre.id}&with_watch_providers=${providers.map((provider, index) => {
      return `${index ? '|' : ''}${provider.id}`;
    })}&watch_region=IT&with_watch_monetization_types=flatrate`,
    apiOptions
  ).then((res) => {
    if (!res.ok) throw new Error(`${res.statusText}`);
    return res.json();
  });
};
