import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
  CategoryWrapper,
  CategoryTitle,
  CategoryDataWrapper,
  NextButton,
  PreviousButton,
  CarouselWrapper,
} from './category-carousel.styles';

import CategoryItem from '../category-item/category-item.component';

const CategoryCarousel = ({ title, category }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    if (index < 0) {
      index = 0;
    } else if (index >= category.length) {
      index = category.length - 1;
    }
    setActiveIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleClick(activeIndex + 1),
    onSwipedRight: () => handleClick(activeIndex - 1),
  });

  return (
    <CategoryWrapper>
      <CategoryTitle>{title}</CategoryTitle>
      <CarouselWrapper>
        <PreviousButton
          onClick={() => {
            handleClick(activeIndex - 1);
          }}>
          <FaArrowLeft />
        </PreviousButton>

        <CategoryDataWrapper {...handlers} activeIndex={activeIndex}>
          {category?.map((el) => (
            <CategoryItem
              onClick={() => {
                return navigate('/random');
              }}
              title={!el.title ? el.original_name : el.title}
              year={!el.release_date ? el.first_air_date : el.release_date}
              backdrop={el.backdrop_path}
              genres={[
                { id: 1, name: 'Hello' },
                { id: 2, name: 'Hi' },
              ]}
            />
          ))}
        </CategoryDataWrapper>

        <NextButton
          onClick={() => {
            handleClick(activeIndex + 1);
          }}>
          <FaArrowRight />
        </NextButton>
      </CarouselWrapper>
    </CategoryWrapper>
  );
};

export default CategoryCarousel;
