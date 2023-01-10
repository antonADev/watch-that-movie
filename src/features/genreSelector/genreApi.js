const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = `https://api.themoviedb.org/3/`;
const lang = navigator.language;

export const fetchMovieGenres = () => {
  return fetch(`${baseURL}/genre/movie/list?api_key=${API_KEY}&language=${lang}`)
    .then((res) => {
      if (!res.ok) throw new Error(`${res.statusText}`);

      return res.json();
    })
    .catch((error) => error);
};

export const fetchTvSeriesGenres = () => {
  return fetch(`${baseURL}genre/tv/list?api_key=${API_KEY}&language=${lang}`)
    .then((res) => {
      if (!res.ok) throw new Error(`${res.statusText}`);

      return res.json();
    })
    .catch((error) => error);
};
