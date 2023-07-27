import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRevMovie } from '../../services/api';
import { Message } from 'components/Message/Message';

function Reviews() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      setIsLoading(true);
      setError(null);
      try {
        const { results } = await getRevMovie(movieId);
        setReviews(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError('Try reloading!');
        }
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <section>
      {isLoading ? (
        <Message>Loading</Message>) : (
        <ul>
          {reviews.length > 0 ? (
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p><b>Author:</b> {author}</p>
                <p>{content}</p>
              </li>
            ))
          ) : ( <Message>We don't have any reviews!</Message>)}
        </ul>
      )}
      {error && <Message>{error}</Message>}
    </section>
  );
}

export default Reviews;