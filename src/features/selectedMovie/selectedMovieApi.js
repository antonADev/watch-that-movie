const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = `https://api.themoviedb.org/3/`;
const lang = navigator.language;

export const fetchMovieDetails = (movieId) => {
  const promises = [];

  promises.push(
    fetch(`${baseURL}movie/${movieId}?api_key=${API_KEY}&language=${lang}`)
  );

  // promises.push(
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=${lang}`
  //   )
  // );

  return promises;
};
