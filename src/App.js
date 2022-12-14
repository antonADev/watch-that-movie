import { useState, useEffect } from 'react';
import RandomMovie from './routes/randomMovie/randomMovie.component';
import Welcome from './routes/welcome/welcome.component';
import Choose from './routes/choose/choose.component';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Form from './routes/form/form.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

function App() {
  const { isLoaded } = useSelector((state) => state.welcome);

  return (
    <div className='App'>
      {isLoaded && <Welcome />}
      {!isLoaded && (
        <Routes>
          {/* <Route path='/' element={<Welcome />} /> */}
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            {/* <Route path='/choose' element={<Choose />} /> */}
            <Route path='/choose' element={<Form />} />
            <Route path='/random' element={<RandomMovie />} />
            <Route path='/preferences' element={<Form />} /> */
            {/* <Route path='/selected' element={<MovieCard />} /> */}
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
