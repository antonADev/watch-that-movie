import React, { useState, useEffect } from 'react';
import { createProviderObject, getRegion } from '../../utils/helperFunctions';

import Theme from '../../Theme';

import {
  ProviderSelectorWrapper,
  Input,
  ListWrapper,
  UnorderedList,
  SelectedList,
} from './provider-selector.styles';

import ProviderItem from '../provider-item/provider-item.component';
import ProviderSelected from '../provider-selected/provider-selected.component';

const region = getRegion(navigator.language);

const ProviderSelector = ({ formData, setFormData }) => {
  const [fetchedProviders, setFetchedProviders] = useState([]);
  const [filteredProvider, setFilteredProvider] = useState(fetchedProviders);
  const [searchField, setSearchField] = useState('');

  const { providers } = formData;

  const handleAdd = (el) => {
    const existingProvider = providers?.find(
      (provider) => provider.id === el.id
    );

    if (existingProvider) return;

    if (!providers) {
      setFormData({ ...formData, providers: [el] });
    }

    if (providers && !existingProvider) {
      setFormData({ ...formData, providers: [...providers, el] });
    }
    setSearchField('');
  };

  const handleRemove = (el) => {
    const existingProvider = providers?.find(
      (provider) => provider.id === el.id
    );

    if (existingProvider) {
      setFormData({
        ...formData,
        providers: providers.filter(
          (provider) => provider.id !== existingProvider.id
        ),
      });
    }
  };

  const fetchProviders = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/watch/providers/tv?api_key=b4075be843e96cdf1d04055e2fee6ec7&language=${navigator.language}&watch_region=${region}`
    );

    const res = await data.json();
    setFetchedProviders(res.results.map((el) => createProviderObject(el)));
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  useEffect(() => {
    const newFilteredProvider = fetchedProviders.filter((provider) => {
      return provider.name.toLowerCase().includes(searchField);
    });
    setFilteredProvider(newFilteredProvider);
  }, [fetchedProviders, searchField]);

  const onChangeHandler = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <Theme>
      <ProviderSelectorWrapper>
        <Input
          value={searchField}
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
                  addHandler={() => {
                    handleAdd(el);
                  }}
                  formData={formData}
                  setFormData={setFormData}
                  setSearchField={setSearchField}
                />
              ))}
            </UnorderedList>
          )}
        </ListWrapper>
        <SelectedList>
          {providers?.map((provider) => (
            <ProviderSelected
              key={provider.id}
              removeHandler={() => {
                handleRemove(provider);
              }}
              name={provider.name}
              logo={provider.logoImage}
            />
          ))}
        </SelectedList>
      </ProviderSelectorWrapper>
    </Theme>
  );
};

export default ProviderSelector;
