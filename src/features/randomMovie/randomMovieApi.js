const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = `https://api.themoviedb.org/3/`;
const lang = navigator.language;
export const fetchGenre = () => {
  return fetch(
    `${baseURL}genre/movie/list?api_key=${API_KEY}&language=${lang}`
  ).then((res) => res.json());
};

export const fetchPages = (genreId) => {
  return fetch(
    `${baseURL}discover/movie?api_key=${API_KEY}&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`
  ).then((res) => res.json());
};
export const fetchMovie = (genreId, page) => {
  return fetch(
    `${baseURL}discover/movie?api_key=${API_KEY}&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}&with_watch_monetization_types=flatrate`
  ).then((res) => res.json());
};
export const fetchFinalMovie = (movieId) => {
  // const lang = navigator.language;
  return fetch(
    `${baseURL}movie/${movieId}?api_key=${API_KEY}&language=${lang}}`
  ).then((res) => res.json());
  // return fetch(
  //   `${baseURL}movie/${movieId}?api_key=${API_KEY}&language=${lang}}`
  // ).then((res) => res.json());
};
