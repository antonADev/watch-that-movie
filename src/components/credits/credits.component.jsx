import { useSelector } from 'react-redux';
import Theme from '../../Theme';

import { useFilter } from '../../utils/helperFunctions';

import { CreditTextWrapper, CreditPara } from './credits.styles';

const Credits = ({ releaseDate, crew }) => {
  const { type } = useSelector((state) => state.selectedMovieData);
  return (
    <Theme>
      <CreditTextWrapper>
        <CreditPara>
          Release date: <span>{releaseDate}</span>
        </CreditPara>
        <CreditPara>
          {type === 'movie' ? 'Director:' : 'Executive Producers:'}{' '}
          <span>
            {useFilter(crew, 'job', type === 'movie' ? 'Director' : 'Executive Producer', 3)}
          </span>
        </CreditPara>
        <CreditPara>
          Writers: <span>{useFilter(crew, 'department', 'Writing', 3)}</span>
        </CreditPara>
      </CreditTextWrapper>
    </Theme>
  );
};

export default Credits;
