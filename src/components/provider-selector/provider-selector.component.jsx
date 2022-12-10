import React, { useState, useEffect } from 'react';
import { createProviderObject, getRegion } from '../../utils/helperFunctions';

import Theme from '../../Theme';

import {
  ProviderSelectorWrapper,
  Input,
  ListWrapper,
  UnorderedList,
} from './provider-selector.styles';

import ProviderItem from '../provider-item/provider-item.component';

const region = getRegion(navigator.language);

const ProviderSelector = ({ formData, setFormData }) => {
  const [providers, setProviders] = useState([]);
  const [filteredProvider, setFilteredProvider] = useState(providers);
  const [searchField, setSearchField] = useState('');
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

  useEffect(() => {
    const newFilteredProvider = providers.filter((provider) => {
      return provider.name.toLowerCase().includes(searchField);
    });
    setFilteredProvider(newFilteredProvider);
  }, [providers, searchField]);

  const onChangeHandler = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <Theme>
      <ProviderSelectorWrapper>
        <Input
          placeholder='Select your streaming providers'
          type='text'
          onChange={onChangeHandler}
        />
        <ListWrapper>
          {searchField && (
            <UnorderedList>
              {filteredProvider?.map((el) => (
                <ProviderItem
                  key={el.id}
                  name={el.name}
                  logo={el.logoImage}
                  value={el}
                  formData={formData}
                  setFormData={setFormData}
                />
              ))}
            </UnorderedList>
          )}
        </ListWrapper>
        {formData.providers?.map((provider) => (
          <li>{provider.name}</li>
        ))}
      </ProviderSelectorWrapper>
    </Theme>
  );
};

export default ProviderSelector;
