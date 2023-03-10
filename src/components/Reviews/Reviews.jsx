import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { reviewsMovies } from '../../services/MoviesApi';
import { NotHStyled } from './Reviews.styled';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    reviewsMovies(id).then(setReview);
  }, [id]);

  return (
    <div>
      {!review.length ? (
        <NotHStyled>We don't have any review for this movie.</NotHStyled>
      ) : (
        <ul>
          {review.map(({ author, content, id }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
