import { apiOptions } from '../../utils/apiOptionsCall';
const baseURL = `https://api.themoviedb.org/3/`;
const lang = navigator.language;

export const fetchMovieDetails = (type, id) => {
  return fetch(
    `${baseURL}${type}/${id}?language=${lang}&append_to_response=videos,credits`,
    apiOptions
  ).then((res) => {
    if (!res.ok) throw new Error(`${res.statusText}`);
    return res.json();
  });
};
