import { useSearchParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { searchMovies } from '../../services/MoviesApi';
import { LinkStyled, InputStyled, BtnStyled } from './SearchPages.Styled';

export const SearchPages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState();
  const getParams = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    getParams && searchMovies(getParams, 1).then(setMovies);
  }, [getParams]);

  function handleSubmit(evt) {
    evt.preventDefault();
    const query = evt.currentTarget.searchInput.value;
    setSearchParams({ query });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputStyled name="searchInput" />
        <BtnStyled type="submit">Search</BtnStyled>
      </form>
      {movies && (
        <>
          <ul>
            {movies.map(movie => {
              return (
                <li key={movie.id}>
                  <LinkStyled
                    to={`${movie.id}`}
                    state={{ search: `${location.pathname}${location.search}` }}>
                    {movie.title}
                  </LinkStyled>
                </li>
              );
            })}
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};

SearchPages.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    
    })
  ),
};
