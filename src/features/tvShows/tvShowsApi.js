const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = `https://api.themoviedb.org/3/`;
const lang = navigator.language;

export const fetchInitialTvShowList = () => {
  return fetch(`${baseURL}tv/popular?api_key=${API_KEY}&language=${lang}&page=1`).then((res) => {
    if (!res.ok) throw new Error(`${res.statusText}`);
    return res.json();
  });
};

export const fetchMoreTvShowList = (page) => {
  return fetch(`${baseURL}tv/popular?api_key=${API_KEY}&language=${lang}&page=${page}`).then(
    (res) => {
      if (!res.ok) throw new Error(`${res.statusText}`);
      return res.json();
    }
  );
};
