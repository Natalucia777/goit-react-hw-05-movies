import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/movies-api';
import Message from 'components/Message/Message';
import imgMovie from 'components/img-movie/img-movie.png';
import { Desc, Item } from './Cast.styled';

function Cast() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [casts, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadMovieCast() {
      setIsLoading(true);
      setError(null);
      try {
        const { cast } = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError('Try reloading the page!');
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadMovieCast();
  }, [movieId]);
  return (
    <>
      {isLoading ? (
        <Message>Loading</Message>
      ) : (
        <section>
        <ul>
          {casts.length > 0 ? (
            casts.map(({ id, name, character, profile_path }) => {
              const imageUrl = profile_path
                ? `https://image.tmdb.org/t/p/w92${profile_path}`
                : imgMovie;
              return (
                <Item key={id}>
                  <img src={imageUrl} alt={name} width="92" />
                  <Desc><b>{name}</b></Desc>
                  <Desc><b>Character:</b> {character}</Desc>
                </Item>
              );
            })
          ) : (
            <Message>Not information about the movie!</Message>
          )}
        </ul>
        </section>
      )}
      
      {error && <Message>{error}</Message>}
    </>
  );
}

export default Cast;