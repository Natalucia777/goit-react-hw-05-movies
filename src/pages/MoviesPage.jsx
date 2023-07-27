import { useEffect, useState } from 'react';
import { getSearchMovie } from '../services/movies-api';
import SearchForm from 'components/SearchForm/SearchForm';
import Actions from '../components/Actions/Actions';
import Message from 'components/Message/Message';

function MoviesPage() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
 const abortCtrl = new AbortController();
    async function searchMovies(search, signal) {
      setIsLoading(true);
      setError(null);
      try {
        if (search === '') {
          setMovies([]);
          setIsEmpty(false);
          return;
        }
        const { results } = await getSearchMovie({ search, abortCtrl: signal });
        setMovies(results);
        if (!results.length) {
          setIsEmpty(true);
          return;
        } else {
          setIsEmpty(false);
        }
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError('Try reloading the page!');
        }
      } finally {
        setIsLoading(false);
      }
    }

    searchMovies(search, abortCtrl.signal);
    return () => {
      abortCtrl.abort();
    };
  }, [search]);

  const handleSearch = search => {
    setSearch(search);
  };
  return (
    <div>
      <SearchForm onSubmit={handleSearch} />
      {isLoading ? (
        <Message>Loading</Message>
      ) : (
        <>{<Actions movies={movies} />}</>
      )}
      {error && <Message>{error}</Message>}
      {isEmpty && <Message>There are no movies !</Message>}
    </div>
  );
}

export default MoviesPage;
