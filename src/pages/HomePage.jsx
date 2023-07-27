import { useEffect, useState } from 'react';
import { getAllMovie } from '../services/movies-api';
import { Message } from 'components/Message/Message';
import Actions from 'components/Actions/Actions';

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function loadMovies() {
      setIsLoading(true);
      setError(null);
      try {
        const { results } = await getAllMovie();
        setMovies(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError('Try reloading!');
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadMovies();
  }, []);

  return (
    <div>
      <h1>Popular videos</h1>
      {isLoading ? (
        <Message>Loading!</Message>
      ) : (
        <Actions movies={movies} />
      )}
      {error && <Message>{error}</Message>}
    </div>
  );
}

export default HomePage;