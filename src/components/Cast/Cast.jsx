import { useState, useEffect } from 'react';
import { creditsMovies } from '../../services/MoviesApi';
import { useParams } from 'react-router-dom';
import { NotHStyled,ListImg } from './Cast.styled';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { id } = useParams();
    const base_img_url = 'https://image.tmdb.org/t/p/w500';
   

    useEffect(() => {
        creditsMovies(id).then(setCast);
      }, [id]);

  return (
    <div>
       {!cast.length ? (
        <NotHStyled>We don't have any cast for this movie.</NotHStyled>
      ) : (
        <ListImg>
          {cast.map(({ profile_path, name, character, cast_id }) => {
            return (
              <li key={cast_id}>
                <img
                src={
                  profile_path
                    ? `${base_img_url}${profile_path}`
                    : 'http://dummyimage.com/200x300&text=no+photo'
                }
                  alt={name}
                  width="200"
                  height="300"
                />
                <h3>{name}</h3>
                <p>{character}</p>
              </li>
            );
          })}
        </ListImg>
       )}
    </div>
  )
}

export default Cast;



