import React, { useRef, useCallback } from 'react';

import { UnorderedList, ListItem } from './provider-item.styles';

import { MOBILE_IMAGE_PATH } from '../../constants/global';
import { useState } from 'react';

const ProviderItem = ({
  id,
  name,
  logo,
  value,
  formData,
  addHandler,
  setSearchField,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const { providers } = formData;

  const observer = useRef();
  const lastProviderElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          setIsVisible(true);
          console.log(el.intersectionRatio);
          observer.current.disconnect();
        } else {
          return;
        }
      });
    });
    if (node) observer.current.observe(node);
  }, []);

  return (
    <>
      <ListItem
        id={id}
        onClick={addHandler}
        isVisible={isVisible ? 'visible' : 'hidden'}
        ref={lastProviderElementRef}>
        <img src={`${MOBILE_IMAGE_PATH}${logo}`} alt={`${name} logo`} />
        <p>{name}</p>
      </ListItem>
    </>
  );
};

export default ProviderItem;
