const BEARER_TOKEN = import.meta.env.VITE_APP_TMDB_BEARER_TOKEN;

export const apiOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
};
