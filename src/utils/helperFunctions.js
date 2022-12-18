export const randomize = (number = 500) => {
  if (number > 500) return Math.floor(Math.random() * 500);
  else return Math.floor(Math.random() * number);
};

export const createMovieObject = (data) => {
  return {
    id: data.id,
    backdrop: data.backdrop_path,
    credits: data.credits,
    genres: !data.genres ? data.genre_ids : data.genres,
    poster: data.poster_path,
    overview: data.overview !== '' ? data.overview : 'No Storyline Available',
    title: data.title ? data.title : data.name,
    release: data.release_date ? data.release_date : data.first_air_date,
    trailer: data.videos,
    voteAverage: data.vote_average,
    voteCount: data.vote_count,
  };
};

export const createProviderObject = (data) => {
  return {
    id: data.provider_id,
    name: data.provider_name,
    logoImage: data.logo_path,
  };
};

export const getRegion = (string) => {
  return string.split('-')[1];
};

export const getLang = () => {
  return navigator.language;
};

export const useFilter = (array, filterFromWhat, filterIf, howManyResults) => {
  return array
    ?.filter((el) => el?.[filterFromWhat] === filterIf)
    .map((el) => el.name)
    .slice(0, howManyResults)
    .join(', ');
};

export const findAndCompare = (firstArray, secondArray, elementToFind) => {
  firstArray.map((element) => {
    const match = secondArray.find((el) => el[elementToFind] === element);
    return match;
  });

  // el.genre_ids?.map((genre) => {
  //   const match = genresArr.find((el) => el.id === genre);
  //   return match;
  // })
};
