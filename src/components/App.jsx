import { Route, Routes, Navigate} from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import NotFound from 'pages/NotFound';



const HomePage = lazy(() => import("pages/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));


function App() {
  return (
    <Container>
      <Routes>

      <Route>
            <NotFound path="*" />
          </Route>
      </Routes>
      <ToastContainer autoClose={2500} />
    </Container>
  );
};

export default  App;