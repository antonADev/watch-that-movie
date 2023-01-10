import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useIntersectionObserver } from '../../utils/hooks';
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
  fetchSelectedMovie,
  setType,
  setId,
} from '../../features/selectedMovie/selectedMovieSlice';

// import { DESKTOP_IMAGE_PATH, MOBILE_IMAGE_PATH } from '../../constants/global';

import Theme from '../../Theme';
import noImage from '../../assets/no-img.png';

const CategoryCarousel = ({ title, category, genresArr, type }) => {
  const dispatch = useDispatch();
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
  // console.log(element);
  return (
    <Theme>
      <CategoryWrapper>
        <Link to={type}>
          <CategoryTitle>{title}</CategoryTitle>
        </Link>
        <CarouselWrapper>
          <PreviousButton
            onClick={() => {
              handleClick(activeIndex - 1);
            }}>
            <FaArrowLeft />
          </PreviousButton>

          <CategoryDataWrapper {...handlers} activeIndex={activeIndex}>
            {category?.map((el) => {
              console.log(`${el.title} + ${el.backdrop}`);
              return (
                <CategoryItem
                  id={el.id}
                  type={type}
                  key={el.id}
                  onClick={() => {
                    dispatch(setId(el.id));
                    dispatch(setType(type));
                    dispatch(fetchSelectedMovie());
                  }}
                  title={el.title}
                  year={el.release}
                  backdrop={
                    !el.backdrop && !el.poster ? noImage : el.backdrop ? el.backdrop : el.poster
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
    </Theme>
  );
};

export default CategoryCarousel;
