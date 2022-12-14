import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSelectedMovie,
  fetchMovieCredits,
} from '../../features/selectedMovie/selectedMovieSlice';

import { useNavigate } from 'react-router-dom';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';
import ChoiceSelection from '../../components/choice-selection/choice-selection.component';
import ChoiceSummary from '../../components/choice-summary/choice-summary.component';
import Genre from '../../components/selector/selector.component';
import ShowSelector from '../../components/show-selector/show-selector.component';

import HomeHero from '../../components/home-hero/home-hero.component';
import ProviderSelector from '../../components/provider-selector/provider-selector.component';

import Theme from '../../Theme';

import { FormWrapper, ButtonWrapper } from './form.styles';

const initialState = {
  movieOrTv: '',
  genre: '',
  providers: [],
};

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.preferredMovieData);

  const handleNext = () => {
    if (page === 0) {
      if (
        formData.movieOrTv === '' ||
        formData.genre === '' ||
        !formData.providers
      ) {
        return alert('all options are mandatory');
      }
    }

    if (page === 1) {
      dispatch(fetchSelectedMovie({ type: formData.movieOrTv, movieId: data }));
      dispatch(fetchMovieCredits({ type: formData.movieOrTv, movieId: data }));
      return navigate('/random');
    }
    return setPage(page + 1);
  };
  const handlePrevious = () => {
    // if (page === ) return;
    return setPage(page - 1);
  };

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return (
          <>
            <h1>Provide us some informations.</h1>
            <ShowSelector formData={formData} setFormData={setFormData} />
          </>
        );
      case 1:
        return (
          <ChoiceSummary
            formData={formData}
            title='Selected preferences:'
            elements={[
              formData.movieOrTv.toUpperCase(),
              formData.genre.name.toUpperCase(),
              formData.providers.map((provider) => <p>{provider.name}</p>),
            ]}
          />
        );
      default:
        return (
          <>
            <h1>Provide us some informations.</h1>
            <ShowSelector formData={formData} setFormData={setFormData} />
          </>
        );
    }
  };
  console.log(formData);
  return (
    <Theme>
      <FormWrapper>
        <HomeHero
          title={`Aren't you up to something completely random?`}
          subtitle={`No problem, give us some informations of what you're up to, and we'll try to suggest you something that fits for you`}>
          {conditionalComponent()}
          <ButtonWrapper>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.base}
              disabled={page <= 0 ? true : false}
              onClick={handlePrevious}>
              Previous
            </Button>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.base}
              disabled={page >= 2 ? true : false}
              onClick={handleNext}>
              Next
            </Button>
          </ButtonWrapper>
        </HomeHero>
      </FormWrapper>
    </Theme>
  );
};

export default Form;
