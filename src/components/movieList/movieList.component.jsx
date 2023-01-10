import HomeHero from '../../components/home-hero/home-hero.component';
import MovieListItem from '../../components/movieList-item/movieList-item.component';
import Spinner from '../../components/spinner/spinner.component';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import { MovieListWrapper, MovieItemWrapper, ButtonWrapper } from './movieList.styles';
import Error from '../error/error.component';

const MovieList = ({ data, status, message, title, handler, loadMoreStatus }) => {
  return (
    <MovieListWrapper>
      <HomeHero title={`Popular ${title}`}>
        {status === 'loading' && <Spinner />}
        <MovieItemWrapper>
          {status === 'idle' && (
            <>
              {data?.map((el) => (
                <MovieListItem
                  key={el.key}
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
        {status === 'error' && <Error message={message} />}
        <ButtonWrapper>
          {status === 'idle' && (
            <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={handler}>
              Load More
            </Button>
          )}
        </ButtonWrapper>
      </HomeHero>
      {loadMoreStatus === 'error' && <Error message={message} />}
    </MovieListWrapper>
  );
};

export default MovieList;
