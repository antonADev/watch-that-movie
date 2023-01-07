import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HomeHero from '../../components/home-hero/home-hero.component';
import MovieListItem from '../../components/movieList-item/movieList-item.component';
import Spinner from '../../components/spinner/spinner.component';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';
import {
  MovieListWrapper,
  MovieItemWrapper,
  ButtonWrapper,
} from './movieList.styles';

const MovieList = ({
  data,
  status,
  message,
  title,
  handler,
  loadMoreStatus,
}) => {
  return (
    <MovieListWrapper>
      <HomeHero title={`Popular ${title}`}>
        {status === 'loading' && <Spinner />}
        <MovieItemWrapper>
          {status === 'idle' && (
            <>
              {data?.map((el) => (
                <MovieListItem
                  key={el.id}
                  id={el.id}
                  poster={el.poster}
                  title={el.title}
                  release={el.release}
                />
              ))}
              {loadMoreStatus === 'loading' && <Spinner />}
            </>
          )}
        </MovieItemWrapper>
        <ButtonWrapper>
          <Button onClick={handler}>Load More</Button>
        </ButtonWrapper>
      </HomeHero>
      {loadMoreStatus === 'error' && <h1>{message}</h1>}
    </MovieListWrapper>
  );
};

export default MovieList;
