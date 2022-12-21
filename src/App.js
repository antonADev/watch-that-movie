import Welcome from './routes/welcome/welcome.component';

import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Form from './routes/form/form.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

import TvShows from './routes/tvShows/tvShows.component';
import Movies from './routes/movies/movies.component';
import Footer from './components/footer/footer.component';

function App() {
  const { isLoaded } = useSelector((state) => state.welcome);

  return (
    <div className='App'>
      {isLoaded && <Welcome />}
      {!isLoaded && (
        <>
          <Routes>
            <Route path='/' element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path='choose' element={<Form />} />
              <Route path='tv/*' element={<TvShows />} />
              <Route path='movie/*' element={<Movies />} />
            </Route>
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
