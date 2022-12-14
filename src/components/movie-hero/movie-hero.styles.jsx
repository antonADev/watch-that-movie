import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 0 0 30px 30px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  ::after {
    content: '';
    background: url(${(props) => props.background}) no-repeat top;
    background-size: cover;
    position: absolute;
    top: 0;

    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all 1s;
  }
  &:hover::after {
    transform: scale(1.05);
  }
`;

export const TextWrapper = styled.div`
  padding: 0 2rem 2rem 1rem;
  width: 100%;
  height: 100%;
  color: #ffffff;
  text-align: left;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(20 0% 0% / 0.3) 20%,
    hsl(0 0% 0% / 1)
  );
  h1 {
    margin: 0;
    font-size: clamp(1.5rem, -0.875rem + 4.333vw, 3.5rem);
    font-weight: 600;
    span {
      color: gray;
      font-size: clamp(0.9rem, -0.875rem + 4.333vw, 1.8rem);
      font-weight: 400;
    }
  }
`;
export const GenreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > *:not(:first-child) {
    margin-left: 0.5rem;
  }
`;

export const GenrePara = styled.p`
  background-color: ${(props) => props.theme.colors.grey};
  border-radius: 25px;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.1rem 0.7rem;
`;
