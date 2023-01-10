import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGenreData } from '../../features/genreSelector/genreSlice';

import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';

import ChoiceSelection from '../choice-selection/choice-selection.component';

import Genre from '../selector/selector.component';
import Theme from '../../Theme';
import { ShowWrapper } from './show-selector.styles';
import Spinner from '../spinner/spinner.component';
import ProviderSelector from '../provider-selector/provider-selector.component';
import { setType } from '../../features/selectedMovie/selectedMovieSlice';

const ShowSelector = ({ formData, setFormData }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState('');

  const { movieGenres, seriesGenres, status } = useSelector((state) => state.genreData);

  const handleClick = (e) => {
    setActive(e.target.id);
    setFormData({ movieOrTv: e.target.id, genre: '' });
    dispatch(setType(e.target.id));
    dispatch(fetchGenreData());
  };

  return (
    <Theme>
      <ShowWrapper>
        <ChoiceSelection size={formData.movieOrTv ? 'small' : 'big'} title='What are you up to?'>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            id='movie'
            //Express in pixels without px, just the number
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

        {formData.movieOrTv && (
          <ChoiceSelection size={formData.genre ? 'small' : 'big'} title='Choose a genre'>
            {status === 'loading' && <Spinner />}
            {status === 'idle' && movieGenres && seriesGenres && (
              <Genre
                label='Choose'
                values={active === 'movie' ? movieGenres.genres : seriesGenres.genres}
                onChange={(v) => console.log(v)}
                formData={formData}
                setFormData={setFormData}
              />
            )}
          </ChoiceSelection>
        )}
        {formData.genre && (
          <ChoiceSelection justify='flex-start' size='big' title='Select your streaming providers'>
            <ProviderSelector formData={formData} setFormData={setFormData} />
          </ChoiceSelection>
        )}
      </ShowWrapper>
    </Theme>
  );
};

export default ShowSelector;
