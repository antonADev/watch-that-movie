import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPreferredMovie } from '../../features/preferredMovie/preferredMovieSlice';
import ChoiceSelection from '../choice-selection/choice-selection.component';
import { ChoiceSummaryWrapper, ListItem } from './choice-summary.styles';
const ChoiceSummary = ({ title, elements, formData }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchPreferredMovie({
        type: formData.movieOrTv,
        genre: formData.genre,
        providers: formData.providers,
      })
    );
  }, []);
  return (
    <ChoiceSummaryWrapper>
      <ChoiceSelection title={title}>
        {elements.map((el) => (
          <ListItem key={el}>{el}</ListItem>
        ))}
      </ChoiceSelection>
    </ChoiceSummaryWrapper>
  );
};

export default ChoiceSummary;
