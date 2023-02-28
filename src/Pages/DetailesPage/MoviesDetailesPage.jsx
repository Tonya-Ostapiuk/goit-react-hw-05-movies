import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { detailesMovies } from '../../services/MoviesApi';
import {
  UlStyled,
  BtnStyled,
  ContainerStyled, ImgStyled
} from './MoviesDetailesPage.styled';

export const MoviesDetailesPage = () => {
  const { id } = useParams('');
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const base_img_url = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    detailesMovies(id).then(setMovie);
  }, [id]);

  return (
    movie && (
      <>
        <BtnStyled
          type="button"
          onClick={() => navigate(location.state.search)}
        >
          Go back
        </BtnStyled>
        <ContainerStyled>

          <ImgStyled src={`${base_img_url}${movie.poster_path}`} alt="poster" width='200px' />

          <UlStyled>
            <li>
              <h2>{movie.title}</h2>
            </li>

            <li>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </li>
            <li>
            <h3>Genres</h3>
              <p>{movie.genres.name}</p>
            </li>
          </UlStyled>
        </ContainerStyled>
      </>
    )
  );
};
