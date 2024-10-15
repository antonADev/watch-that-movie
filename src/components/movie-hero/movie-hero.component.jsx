import React from 'react';
import Theme from '../../Theme';
import { FaPlayCircle } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import {
  ImageWrapper,
  TrailerContainer,
  InfoWrapper,
  TextWrapper,
  PlayButton,
  GenreWrapper,
  GenrePara,
  CloseButton,
} from './movie-hero.styles';

import YouTube from 'react-youtube';

import noImage from '../../../public/no-img.png';
import { useState } from 'react';

const MOBILE_IMAGE_PATH = 'https://image.tmdb.org/t/p/w780';
const DESKTOP_IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

const MovieHero = ({ title, year, backdrop, genres, video }) => {
  const [playVideo, setPlayVideo] = useState(false);
  function onPlayerReady(event) {
    event.target.playVideo();
  }
  return (
    <Theme>
      <ImageWrapper
        background={
          backdrop === 'null'
            ? `${noImage}`
            : `${window.innerWidth > 768 ? DESKTOP_IMAGE_PATH : MOBILE_IMAGE_PATH}${backdrop}`
        }>
        {video && playVideo && (
          <TrailerContainer>
            <YouTube
              videoId={video.key}
              style={{ height: '100%', width: '100%' }}
              opts={{
                height: '100%',
                width: '100%',
                playerVars: {
                  autoplay: 1,
                  controls: 0,
                },
              }}
              onReady={onPlayerReady}
            />

            <CloseButton aria-label='Close Trailer' onClick={() => setPlayVideo(false)}>
              <AiFillCloseCircle />
            </CloseButton>
          </TrailerContainer>
        )}

        <InfoWrapper>
          <TextWrapper>
            <h1>
              {title}
              <span>({year?.slice(0, 4)})</span>
            </h1>
            {video && (
              <PlayButton aria-label='Play Trailer' onClick={() => setPlayVideo(true)}>
                <FaPlayCircle />
              </PlayButton>
            )}
          </TextWrapper>
          <GenreWrapper>
            {genres
              ?.filter((el, i) => i < 3)
              .map((genre) => (
                <GenrePara key={genre.id}>{genre.name}</GenrePara>
              ))}
          </GenreWrapper>
        </InfoWrapper>
      </ImageWrapper>
    </Theme>
  );
};

export default MovieHero;
