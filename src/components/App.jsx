import { Route, Routes, Navigate} from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import NotFound from 'pages/NotFound';
import UseLayout from 'components/UseLayout/UseLayout';

const HomePage = lazy(() => import("pages/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
       <Route path="/404" element={<NotFound />} />
      </Routes>
        <ToastContainer autoClose={2500} />
    </>
  );
}

export default App;