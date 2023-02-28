import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { MoviesPages } from '../Pages/MoviesPages';
import { HomePages } from '../Pages/HomePages/HomePages';
import { MoviesSub } from 'Pages/MoviesSubPages/MoviesSubPages';
import { SearchPages } from '../Pages/SearchPages/SearchPages';
import { MoviesDetailesPage } from '../Pages/DetailesPage/MoviesDetailesPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} >
         
          </Route>

          <Route path="movies" element={<SearchPages  />}>
            
           
          </Route>
          <Route path="movies/:id/details" element={<MoviesDetailesPage/>}/>
            <Route path=":id" element={<MoviesSub />} />
          </Route>
       

          {/* він буде обраний тільки в тому випадку, якщо жоден інший маршрут не підійде. */}
          <Route path="*" element={<HomePages />} />
        {/* </Route> */}
      </Routes>
    </>
  );
};
