import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import {
  fetchMovieCredits,
  fetchSelectedMovie,
  setType,
} from '../../features/selectedMovie/selectedMovieSlice';

import { DESKTOP_IMAGE_PATH, MOBILE_IMAGE_PATH } from '../../constants/global';

import noImage from '../../assets/no-img.png';

const CategoryCarousel = ({ title, category, genresArr, type }) => {
  const dispatch = useDispatch();
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
          {category?.map((el) => {
            return (
              <CategoryItem
                type={type}
                key={el.id}
                onClick={() => {
                  dispatch(setType(type));
                  dispatch(fetchSelectedMovie({ type: type, movieId: el.id }));
                  // dispatch(fetchMovieCredits({ type: type, movieId: el.id }));
                  return navigate('/random');
                }}
                title={el.title}
                year={el.release}
                backdrop={
                  !el.backdrop && !el.poster
                    ? `${noImage}`
                    : `${
                        window.innerWidth > 768
                          ? DESKTOP_IMAGE_PATH
                          : MOBILE_IMAGE_PATH
                      }${el.backdrop ? el.backdrop : el.poster}`
                }
                genres={el.genres?.map((genre) => {
                  const match = genresArr.find((el) => el.id === genre);
                  return match;
                })}
              />
            );
          })}
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
