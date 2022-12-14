import React from 'react';

import { ListItem } from './provider-selected.styles';

import { MOBILE_IMAGE_PATH } from '../../constants/global';
const ProviderSelected = ({ logo, name, removeHandler }) => {
  return (
    <>
      <ListItem onClick={removeHandler}>
        <img src={`${MOBILE_IMAGE_PATH}${logo}`} alt={`${name} logo`} />
        <p>{name}</p>
      </ListItem>
    </>
  );
};

export default ProviderSelected;
