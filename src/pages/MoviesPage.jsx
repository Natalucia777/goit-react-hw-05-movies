import { useEffect, useState } from 'react';
import { getSearchMovie } from '../services/movies-api';
import SearchForm from 'components/SearchForm/SearchForm';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { Message } from 'components/Message/Message';

function MoviesPage() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    
  }, []);

  const handleSearch = search => {
    setSearch(search);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSearch} />
      {isLoading ? (
        <Message>Loading...</Message>
      ) : (
        <>{<MoviesList movies={movies} />}</>
      )}
      {error && <Message>{error}</Message>}
      {isEmpty && <Message>There are no movies !</Message>}
    </div>
  );
}

export default MoviesPage;
