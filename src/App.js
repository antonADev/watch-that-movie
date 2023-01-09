import Welcome from './routes/welcome/welcome.component';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Form from './routes/form/form.component';
// import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

// import TvShows from './routes/tvShows/tvShows.component';
// import Movies from './routes/movies/movies.component';
import Footer from './components/footer/footer.component';
import { useState, useEffect, lazy } from 'react';

import './App.css';

const Home = lazy(() => import('./routes/home/home.component'));
const Form = lazy(() => import('./routes/form/form.component'));
const Movies = lazy(() => import('./routes/movies/movies.component'));
const TvShows = lazy(() => import('./routes/tvShows/tvShows.component'));
// const Footer = lazy(() => import('./components/footer/footer.component'));

function App() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  const { isLoaded } = useSelector((state) => state.welcome);

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage('fadeOut');
  }, [location, displayLocation]);
  return (
    <div
      className={`App ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransitionStage('fadeIn');
          setDisplayLocation(location);
        }
      }}>
      {isLoaded && <Welcome />}
      {!isLoaded && (
        <>
          <Routes location={displayLocation}>
            <Route path='/' element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path='choose' element={<Form />} />
              <Route path='tv/*' element={<TvShows />} />
              <Route path='movie/*' element={<Movies />} />
              <Route path='*' element={<h1>Path not resolved</h1>} />
            </Route>
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
