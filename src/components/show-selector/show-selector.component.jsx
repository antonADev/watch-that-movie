import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setMovieOrTv, setGenre } from '../../features/form/formSlice';

import { setGenreBasedOnShow } from '../../features/genreSelector/genreSlice';

import { fetchGenreData } from '../../features/genreSelector/genreSlice';

import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';

import ChoiceSelection from '../choice-selection/choice-selection.component';

import Genre from '../selector/selector.component';
import Theme from '../../Theme';
import { ShowWrapper } from './show-selector.styles';
import Spinner from '../spinner/spinner.component';

const data = {
  genres: [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ],
};

const ShowSelector = ({ formData, setFormData }) => {
  const dispatch = useDispatch();

  const [active, setActive] = useState('');

  const { movieGenres, seriesGenres, status, message } = useSelector(
    (state) => state.genreData
  );

  const handleClick = (e) => {
    setActive(e.target.id);
    setFormData({ movieOrTv: e.target.id, genre: '' });
    // dispatch(setMovieOrTv(e.target.id));
    dispatch(fetchGenreData());
  };

  return (
    <Theme>
      <ShowWrapper>
        <ChoiceSelection title='What are you up to?'>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            id='movie'
            //Express in pixels without px, just number
            minWidth={'100'}
            isActive={formData.movieOrTv === 'movie' ? true : false}
            onClick={handleClick}>
            Movie
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            id='tv'
            //Express in pixels without px, just number
            minWidth={'100'}
            isActive={formData.movieOrTv === 'tv' ? true : false}
            onClick={handleClick}>
            Series
          </Button>
        </ChoiceSelection>

        <ChoiceSelection title='Choose a genre'>
          {status === 'loading' && <Spinner />}
          {status === 'idle' && movieGenres && seriesGenres && (
            <Genre
              label='Choose'
              values={
                active === 'movie' ? movieGenres.genres : seriesGenres.genres
              }
              onChange={(v) => console.log(v)}
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </ChoiceSelection>
      </ShowWrapper>
    </Theme>
  );
};

export default ShowSelector;
