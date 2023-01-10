import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Theme from '../../Theme';

import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import ShowSelector from '../../components/show-selector/show-selector.component';
import HomeHero from '../../components/home-hero/home-hero.component';

import { fetchPreferredMovie } from '../../features/preferredMovie/preferredMovieSlice';

import { FormWrapper, FormHeader, ButtonWrapper } from './form.styles';

const initialState = {
  movieOrTv: '',
  genre: '',
  providers: [],
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getMovie = () => {
    return dispatch(
      fetchPreferredMovie({
        type: formData.movieOrTv,
        genre: formData.genre,
        providers: formData.providers,
      })
    ).then((res) => {
      navigate(`/${formData.movieOrTv}/${res.payload}`);
    });
  };

  return (
    <Theme>
      <FormWrapper>
        <HomeHero
          title={`Aren't you up to something completely random?`}
          subtitle={`No problem, give us some informations of what you're up to, and we'll try to suggest you something that fits for you`}>
          <>
            <FormHeader>Provide us some informations.</FormHeader>
            <ShowSelector formData={formData} setFormData={setFormData} />
          </>
          {formData.providers?.[0] && (
            <ButtonWrapper>
              <Button
                buttonType={BUTTON_TYPE_CLASSES.base}
                onClick={() => {
                  getMovie();
                }}>
                Surprise Me
              </Button>
            </ButtonWrapper>
          )}
        </HomeHero>
      </FormWrapper>
    </Theme>
  );
};

export default Form;
