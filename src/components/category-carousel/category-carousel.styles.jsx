import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  margin-top: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  overflow: hidden;
`;

export const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 30px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const CategoryDataWrapper = styled.div`
  display: flex;
  border-radius: 30px;
  width: 100%;
  transform: translateX(-${(props) => props.activeIndex * 100}%);

  transition: transform 0.3s;
  /* gap: 2rem; */
`;

export const NextButton = styled.button`
  background: none;
  color: white;
  border: none;
  font-size: 1.5rem;
  z-index: 1;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
`;
export const PreviousButton = styled(NextButton)`
  left: 0;
  transform: translate(50%, -50%);
`;
