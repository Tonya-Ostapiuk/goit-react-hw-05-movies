import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { MoviesPages } from '../Pages/MoviesPages';
import { HomePages } from '../Pages/HomePages';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages/>}/>
          <Route path="movies" element={<MoviesPages />}></Route>
          {/* він буде обраний тільки в тому випадку, якщо жоден інший маршрут не підійде. */}
          {/* <Route path="*" element={<NotFound />} />  */}
        </Route>
      </Routes>
    </>
  );
};
