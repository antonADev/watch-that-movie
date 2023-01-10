import React from 'react';
const Error = ({ message }) => {
  return (
    <>
      <h2>Sorry an error occured.</h2>
      <p>{message}</p>
    </>
  );
};

export default Error;
