import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate, Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { detailesMovies } from '../../services/MoviesApi';
import {
  UlStyled,
  BtnStyled,
  ContainerStyled,
  ContainerStylInf,
  ImgStyled,
} from './MoviesDetailesPage.styled';

export const MoviesDetailesPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const base_img_url = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    detailesMovies(id).then(setMovie);
  }, [id]);


  const { title, overview, poster_path, vote_average, genres = [] } = movie;
  const genresName = genres.map(elem => elem.name);

  return (
    Object.keys(movie).length && (
      <>
        <BtnStyled
          type="button"
          onClick={() => navigate(location.state.search)}
        >
          Go back
        </BtnStyled>
        <ContainerStyled>
          <ImgStyled
            src={`${base_img_url}${poster_path}`}
            alt="poster"
            width="250"
            height="350"
          />

          <UlStyled>
            <li>
              <h2>{title}</h2>
              <p> Vote average: {vote_average}</p>
            </li>

            <li>
              <h3>Overview</h3>
              <p>{overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
              <p>{genresName.join(', ')}</p>
            </li>
          </UlStyled>
        </ContainerStyled>
        <ContainerStylInf>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </ContainerStylInf>
      </>
    )
  );
};
MoviesDetailesPage.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      genresName: PropTypes.string,
      overview: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
