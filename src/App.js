import { useState, useEffect } from 'react';
import RandomMovie from './routes/randomMovie/randomMovie.component';
import Welcome from './routes/welcome/welcome.component';
import Choose from './routes/choose/choose.component';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Form from './routes/form/form.component';

function App() {
  const { isLoaded } = useSelector((state) => state.welcome);

  return (
    <div className='App'>
      {isLoaded && <Welcome />}
      {!isLoaded && (
        <Routes>
          {/* <Route path='/' element={<Welcome />} /> */}
          <Route path='/' element={<Choose />} />
          <Route path='/random' element={<RandomMovie />} />
          <Route path='/preferences' element={<Form />} />
          {/* <Route path='/selected' element={<MovieCard />} /> */}
        </Routes>
      )}
    </div>
  );
}

export default App;
