import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieHero from '../movie-hero/movie-hero.component';
import Details from '../details/details.component';
import Storyline from '../storyline/storyline.components';

import noImage from '../../assets/no-img.png';
import {
  MovieCardWrapper,
  MovieHeroWrapper,
  MovieDataWrapper,
  ProfileCarousel,
  CastWrapper,
} from './movie-card.styles';
import Spinner from '../spinner/spinner.component';
import PeopleCarousel from '../people-carousel/people-carousel.component';
import Theme from '../../Theme';

const MovieCard = ({ status, movie, credits, message }) => {
  return (
    <Theme>
      <>
        {movie && (
          <MovieCardWrapper>
            <MovieHeroWrapper>
              <MovieHero
                title={movie.title}
                genres={movie.genres}
                //Year original format yyyy-dd-mm
                year={movie.release}
                backdrop={!movie.backdrop ? movie.poster : movie.backdrop}
                video={
                  movie.trailer.results.filter(
                    (el) => el.type === 'Teaser' || el.type === 'Trailer'
                  )[0]
                }
              />
            </MovieHeroWrapper>
            <MovieDataWrapper>
              <Details
                vote={movie.voteAverage}
                voteCount={movie.voteCount}
                releaseDate={movie.release}
                poster={movie.poster}
                crew={movie.credits.crew}
              />
              <Storyline text={movie.overview} />
              <CastWrapper>
                <h3>Cast</h3>
                <ProfileCarousel>
                  {movie.credits.cast?.map((el) => (
                    <PeopleCarousel
                      key={el.id}
                      imagePath={
                        el.profile_path !== null
                          ? `https://image.tmdb.org/t/p/w185/${el.profile_path}`
                          : `${noImage}`
                      }
                      name={el.name}
                      character={el.character}
                    />
                  ))}
                </ProfileCarousel>
              </CastWrapper>
            </MovieDataWrapper>
          </MovieCardWrapper>
        )}
      </>
    </Theme>
  );
};

export default MovieCard;
