import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { trendingMovies } from '../services/MoviesApi';



export const MoviesPages = () => {
 

  return (
<>
</>
  )
};


// export const MoviesPages = () => {
//   const [movies, setMovies] = useState(null);
//   const [page, setPage] = useState(1);

//   function fetchMovies(page) {
//     trendingMovies(page).then(setMovies);
//   }

//   useEffect(() => {
//     fetchMovies(page);
//   }, [page]);

//   return (
//     movies && (
//       <>
//     <ul>
//       {movies.map(movie => {
//         return (
//           <li key={movie.id}>
//             <Link to={`${movie.id}`}>{movie.title}</Link>
//           </li>
//         );
//       })}
//     </ul>
//     <Outlet/>
//     </>)
//   );
// };
