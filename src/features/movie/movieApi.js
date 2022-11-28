export const fetchMovie = (genreId) => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=b4075be843e96cdf1d04055e2fee6ec7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`
  ).then((res) => res.json());
};
