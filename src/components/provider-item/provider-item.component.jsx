import { useRef } from 'react';

import { ListItem } from './provider-item.styles';

import { MOBILE_IMAGE_PATH } from '../../constants/global';
import { useIntersectionObserver } from '../../utils/hooks';

const ProviderItem = ({ id, name, logo, addHandler }) => {
  const ref = useRef();
  const isVisible = useIntersectionObserver(ref, { treshold: 0.5 });
  return (
    <>
      <ListItem id={id} onClick={addHandler} isVisible={isVisible ? 'visible' : 'hidden'} ref={ref}>
        <img src={`${MOBILE_IMAGE_PATH}${logo}`} alt={`${name} logo`} />
        <p>{name}</p>
      </ListItem>
    </>
  );
};

export default ProviderItem;
