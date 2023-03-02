import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePages } from '../Pages/HomePages/HomePages';
import { SearchPages } from '../Pages/SearchPages/SearchPages';
import { MoviesDetailesPage } from '../Pages/DetailesPage/MoviesDetailesPage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />}></Route>

          <Route path="movies" element={<SearchPages />}></Route>
          <Route path="movies/:id" element={<MoviesDetailesPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
