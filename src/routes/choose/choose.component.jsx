import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import HomeHero from '../../components/home-hero/home-hero.component';

import { useDispatch } from 'react-redux';

import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';
import { ChooseWrapper, LinkWrapper } from './choose.styles';
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
      <HomeHero
        title={`Aren't you up to something completely random?`}
        subtitle={`No problem, give us some informations of what you're up to, and we'll try to suggest you something that fits for you`}>
        <LinkWrapper>
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
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
              Try your luck
            </Button>
          </Link>
        </LinkWrapper>
      </HomeHero>
    </ChooseWrapper>
  );
};

export default Choose;
