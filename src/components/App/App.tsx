import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import FavoritesPage from '../../pages/FavoritesPage';

function App() {
  return (
    <div className='container'>
      <header>
        <div className='logo'>MovieFinder</div>
        <nav>
          <Link to='/' className='nav-link'>
            Главная
          </Link>
          <Link to='/favorites' className='nav-link'>
            Избранное
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='movie/:id' element={<MovieDetailsPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
      <footer>MovieFinder © {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;
