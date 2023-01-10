import React from 'react';
import HomeHero from '../home-hero/home-hero.component';
import { ErrorContainer } from './error.styles';
const Error = ({ message }) => {
  return (
    <>
      <h2>Sorry an error occured.</h2>
      <p>{message}</p>
    </>
  );
};

export default Error;
