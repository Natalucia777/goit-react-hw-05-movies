import { useEffect, useState, useRef } from 'react';
import { TiArrowLeftThick } from "react-icons/ti";
import { Link, useLocation, useParams } from 'react-router-dom';
import { getDetails } from '../services/movies-api';
import Message from 'components/Message/Message';
import AboutTheFilm from 'components/AboutTheFilm/AboutTheFilm';
import Informations from 'components/Informations/Informations';

function MovieDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/")
  
  useEffect(() => {
  async function loadMovieDetails() {
      setIsLoading(true);
      setError(null);
        try {
        const {
          genres,
          original_title,
          overview,
          poster_path,
          release_date,
          vote_average,
        } = await getDetails(movieId);
        const releaseYear = release_date.slice(0, 4);
        const votePercentage = Math.round(vote_average * 10);

        setMovie({
          genres: genres.map(genre => genre.name).join(' '),
          original_title,
          overview,
          poster_path,
          releaseYear,
          votePercentage,
        });
      
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError('Try reloading the page!'); }
        } finally {
          setIsLoading(false);
      }
    }
    loadMovieDetails();
  }, [movieId]);
  
  return (
    <>
      <Link to={backLink.current}>
        <button>
          <TiArrowLeftThick />
          Go back
        </button>
      </Link>
      {isLoading ? <Message>
        Loading
      </Message> : <Informations movie={movie} />}
      {error && <Message>{error}</Message>}
      <AboutTheFilm/>
    </>
  );
  
}

export default MovieDetailsPage;