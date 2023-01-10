const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = `https://api.themoviedb.org/3/`;
const lang = navigator.language;

export const fetchMovieDetails = (type, id) => {
  return fetch(
    `${baseURL}${type}/${id}?api_key=${API_KEY}&language=${lang}&append_to_response=videos,credits`
  ).then((res) => {
    if (!res.ok) throw new Error(`${res.statusText}`);
    return res.json();
  });
};
