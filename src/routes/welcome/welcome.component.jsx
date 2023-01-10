import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { setIsLoaded } from '../../features/welcome/welcomeSlice';

import { WelcomeWrapper, Span, AnimationDiv, Header, DotContainer } from './welcome.styles';
import Theme from '../../Theme';

const Welcome = () => {
  const dispatch = useDispatch();
  const { isLoaded } = useSelector((state) => state.welcome);
  console.log(isLoaded);
  useEffect(() => {
    const TIMEOUT_DURATION = 3000;
    const myTimeoutCallback = () => {
      if (!isLoaded) return;
      dispatch(setIsLoaded());
    };

    const timeoutId = setTimeout(myTimeoutCallback, TIMEOUT_DURATION);

    return () => clearTimeout(timeoutId);
  }, [isLoaded]);
  return (
    <Theme>
      <WelcomeWrapper>
        <AnimationDiv>
          <Header>
            <Span>Watch</Span>
            <Span>That</Span>
            <Span>Movie</Span>
          </Header>
          <DotContainer></DotContainer>
        </AnimationDiv>
      </WelcomeWrapper>
    </Theme>
  );
};

export default Welcome;
