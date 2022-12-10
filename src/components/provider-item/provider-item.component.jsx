// import React, { useRef, useEffect } from 'react';

// import { ProviderWrapper } from './provider-item.styles';

// import { useIntersect } from '../../utils/hooks';

// import { MOBILE_IMAGE_PATH } from '../../constants/global';

// const ProviderItem = ({ id, name, logo }) => {
//   const targets = useRef(new Set());
//   const [entries, setObservedNodes] = useIntersect({ threshold: 1 });

//   useEffect(() => {
//     setObservedNodes(() => [...targets.current]);
//   }, [setObservedNodes]);

//   useEffect(() => {
//     for (const entry of entries)
//       if (entries.isIntersecting) {
//         console.log(entry);

//         setObservedNodes((observedNodes) =>
//           observedNodes.filter((node) => node !== entry.target)
//         );
//       }
//   }, [entries, setObservedNodes]);
//   console.log(targets);
//   return (
//     <ProviderWrapper ref={(element) => targets.current.add(element)}>
//       <img src={`${MOBILE_IMAGE_PATH}${logo}`} alt={`${name} logo`} />
//       <h4>{name}</h4>
//     </ProviderWrapper>
//   );
// };

// export default ProviderItem;

import React, { useRef, useCallback } from 'react';

import { UnorderedList, ListItem } from './provider-item.styles';

import { MOBILE_IMAGE_PATH } from '../../constants/global';
import { useState } from 'react';

const ProviderItem = ({ id, name, logo, value, formData, setFormData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { providers } = formData;

  const handleClick = (el) => {
    if (!providers) {
      setIsActive(true);
      setFormData({ ...formData, providers: [el] });
    }

    const existingProvider = providers?.find(
      (provider) => provider.id === el.id
    );

    if (existingProvider && providers) {
      setIsActive(false);
      setFormData({
        ...formData,
        providers: providers.filter(
          (provider) => provider.id !== existingProvider.id
        ),
      });
    }

    if (providers && !existingProvider) {
      setIsActive(true);
      setFormData({ ...formData, providers: [...providers, el] });
    }
  };

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
        onClick={() => {
          handleClick(value);
        }}
        isVisible={isVisible ? 'visible' : 'hidden'}
        isActive={isActive}
        ref={lastProviderElementRef}>
        <img src={`${MOBILE_IMAGE_PATH}${logo}`} alt={`${name} logo`} />
        <p>{name}</p>
      </ListItem>
    </>
  );
};

export default ProviderItem;
