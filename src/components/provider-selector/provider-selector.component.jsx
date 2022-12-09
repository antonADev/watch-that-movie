import React, { useState, useEffect, useCallback } from 'react';
import { createProviderObject, getRegion } from '../../utils/helperFunctions';

import { useIntersect } from '../../utils/hooks';

import { ProviderSelectorWrapper } from './provider-selector.styles';

import ProviderItem from '../provider-item/provider-item.component';
import { useRef } from 'react';

const region = getRegion(navigator.language);

const ProviderSelector = ({ formData, setFormData }) => {
  const [providers, setProviders] = useState([]);

  const fetchProviders = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/watch/providers/tv?api_key=b4075be843e96cdf1d04055e2fee6ec7&language=${navigator.language}&watch_region=${region}`
    );

    const res = await data.json();
    setProviders(res.results.map((el) => createProviderObject(el)));
  };

  useEffect(() => {
    fetchProviders();
  }, []);
  return (
    <ProviderSelectorWrapper>
      {providers?.map((el) => (
        <ProviderItem
          key={el.id}
          name={el.name}
          logo={el.logoImage}
          value={el}
          formData={formData}
          setFormData={setFormData}
        />
      ))}
    </ProviderSelectorWrapper>
  );
};

export default ProviderSelector;
