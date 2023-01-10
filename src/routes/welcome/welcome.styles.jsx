import styled, { keyframes } from 'styled-components';

const expand = keyframes`
0%{
  background-color: #4947a8;
    width: 0;
    height: 0;
    border-radius: 50%;
    
  }
  70%{
    opacity: 1;
  }
  100%{
    width: 100%;
    height: 100%;
    border-radius: 0;
    background-color: #4947a8;
    opacity: 0;
    /* transform: scale(2) */
  }
  

`;

const appear = keyframes`
0% {opacity: 0;
    /* transform: translate(-100%); */
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    opacity: 1;
    /* transform: translate(0); */
    transform: scale(1);
  }
`;

const changeColor = keyframes`

100% {
  color:  #ffffff;
}

`;

export const WelcomeWrapper = styled.div`
  position: relative;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnimationDiv = styled.div`
  position: relative;
  margin: 0;
  /* height: 100%;
  width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${expand} 1s ease-in 2s forwards;
`;

export const Header = styled.h1`
  font-family: 'Passion One', cursive;
  text-transform: uppercase;
  font-size: 5rem;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
  display: flex;
  flex-direction: column;
  animation: ${changeColor} 2s 1.9s forwards;
  span:nth-child(3n) {
    animation-delay: 1s;
  }

  span:nth-child(3n-1) {
    animation-delay: 0.5s;
  }

  span:nth-child(3n-2) {
    animation-delay: 0s;
  }
`;

export const Span = styled.span`
  opacity: 0;
  animation: ${appear} 1s forwards;
`;

export const DotContainer = styled.div`
  /* position: absolute;
   width: 7px;
  height: 7px; 
  border-radius: 50%;
  bottom: 10%;
  right: -10%; 
  background-color: #8f44fd;

  animation: ${expand} 3s cubic-bezier(0.92, 0.91, 0.53, 1.32) 1.5s; */
`;

// const opacityAni = keyframes
// 0% {
//   opacity: 0;
// }
// 50% {
//   opacity: 1;
// }
// 100% {
//   opacity: 0;
// }
// `;

// const glitchAnimation = keyframes
// 0% {
//   text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
//     -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
//     -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
// }
// 14% {
//   text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
//     -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
//     -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
// }
// 15% {
//   text-shadow: -0.05em 0.025em 0 rgba(255, 0, 0, 0.75),
//     0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
//     -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
// }
// 49% {
//   text-shadow: -0.05em 0.025em 0 rgba(255, 0, 0, 0.75),
//     0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
//     -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
// }
// 50% {
//   text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
//     0.05em 0 0 rgba(0, 255, 0, 0.75),
//     0 -0.05em 0 rgba(0, 0, 255, 0.75);
// }
// 99% {
//   text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
//     0.05em 0 0 rgba(0, 255, 0, 0.75),
//     0 -0.05em 0 rgba(0, 0, 255, 0.75);
// }
// 100% {
//   text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
//     -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
//     -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
// }
// `;

// export const WelcomeWrapper = styled.div`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const Paragraph = styled.p`
//   position: relative;
//   color: white;
//   font-size: clamp(5rem, -0.875rem + 10.333vw, 8rem);
//   font-weight: 700;
//   text-transform: uppercase;

//   text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
//     -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
//     0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

//   animation: ${glitchAnimation} 700ms infinite;
//   animation: ${opacityAni} 3500ms;
// `;

// export const Span = styled.span`
//   position: absolute;
//   top: 0;
//   left: 0;
//   animation: ${opacityAni} 3500ms;

//   &:first-child {
//     animation: ${glitchAnimation} 650ms infinite;
//     clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
//     transform: translate(-0.025em, -0.0125em);
//     opacity: 0.8;
//   }
//   &:last-child {
//     animation: ${glitchAnimation} 375ms infinite;
//     clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
//     transform: translate(0.0125em, 0.025em);
//     opacity: 0.8;
//   }
// `;
