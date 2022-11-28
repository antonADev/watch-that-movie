import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ReactComponent as WaveBg } from '../../assets/wave.svg';

import MovieHero from '../../components/movie-hero/movie-hero.component';

import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';
import { ChooseWrapper, MovieHeroWrapper } from './choose.styles';
import { fetchInitialData } from '../../features/randomMovie/randomMovieSlice';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const Choose = () => {
  const [movieData, setMovieData] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  //     );
  //     const res = await data.json();
  //     setMovieData(res.results);
  //     console.log(movieData);
  //   };
  //   fetchData();
  // }, []);

  return (
    <ChooseWrapper>
      <Link
        style={{
          textDecoration: 'none',
        }}
        to='/preferences'>
        <Button type='button' buttonType={BUTTON_TYPE_CLASSES.base}>
          Provide us some infos?
        </Button>
      </Link>
      <Link
        style={{
          textDecoration: 'none',
        }}
        to='/random'>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Try your luck</Button>
      </Link>
    </ChooseWrapper>
  );
};

export default Choose;
