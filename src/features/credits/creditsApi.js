const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = `https://api.themoviedb.org/3/`;

export const fetchCreditsApi = (id) => {
  const lang = navigator.language;
  return fetch(
    `${baseURL}movie/${id}/credits?api_key=${API_KEY}&language=${lang}`
  ).then((res) => res.json());
};
