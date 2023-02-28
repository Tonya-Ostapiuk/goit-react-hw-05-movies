import { useState, useEffect } from 'react';
import {  Outlet, useLocation } from 'react-router-dom';
import { trendingMovies } from '../../services/MoviesApi';
import {  LinkStyled } from './HomePages.styled'

export const HomePages = () => {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
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
            
            <LinkStyled to={`${movie.id}`}state={{ search: `${location.pathname}${location.search}` }}>{movie.title}</LinkStyled>
          </li>
        );
      })}
    </ul>
    <Outlet/>
    </>)
  );
}


