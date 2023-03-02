import { useState, useEffect } from 'react';
import {  Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { trendingMovies } from '../../services/MoviesApi';
import {  LinkStyled } from './HomePages.styled'

export const HomePages = () => {
  const [movies, setMovies] = useState(null);
  const [page] = useState(1);
  const location = useLocation();

  function fetchMovies(page) {
    trendingMovies(page).then(setMovies);
  }

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  return (
    movies && (
      <>
      <h1>Trending today</h1>
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            
            <LinkStyled to={`/movies/${movie.id}`}state={{ search: `${location.pathname}${location.search}` }}>{movie.title || movie.name}</LinkStyled>
          </li>
        );
      })}
    </ul>
    <Outlet/>
    </>)
  );
}
HomePages.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};



