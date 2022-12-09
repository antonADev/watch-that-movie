import React, { useState } from 'react';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';
import ChoiceSelection from '../../components/choice-selection/choice-selection.component';
import ChoiceSummary from '../../components/choice-summary/choice-summary.component';
import Genre from '../../components/selector/selector.component';
import ShowSelector from '../../components/show-selector/show-selector.component';

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

  const handleNext = () => {
    if (page === 0) {
      if (formData.movieOrTv === '' || formData.genre === '') {
        return alert('all options are mandatory');
      }
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
        return <ProviderSelector formData={formData} setFormData={setFormData} />;
      case 2:
        return (
          <ChoiceSummary
            title='Selected preferences:'
            elements={[
              formData.movieOrTv.toUpperCase(),
              formData.genre.name.toUpperCase(),
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
        {/* <h1>Provide us some informations.</h1>
        {page === 1 && (
          <ShowSelector formData={formData} setFormData={setFormData} />
        )}
        {page === 2 && <h1>Hello</h1>} */}
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
      </FormWrapper>
    </Theme>
  );
};

export default Form;
