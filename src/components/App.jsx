import { Routes, Route } from 'react-router-dom';
import { lazy } from "react";
import { Layout } from './Layout/Layout';


const HomePages = lazy(() => import("../Pages/HomePages/HomePages"));
const SearchPages = lazy(() => import("../Pages/SearchPages/SearchPages"));
const MoviesDetailesPage = lazy(() => import("../Pages/DetailesPage/MoviesDetailesPage"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


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
