import imgMovie from 'components/img-movie/img-movie.png';
import PropTypes from 'prop-types';
import { Wrapper } from './Informations.styled';

const Informations = ({ movie }) => {
  return (
    <Wrapper>
      <img
        src={ movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : imgMovie }
        alt={movie.original_title}
        width="200"
      />
      <ul>
        <li>
          <h1>
            {movie.original_title} ({movie.releaseYear})
          </h1>
          <p>User Score: {movie.votePercentage}%</p>
        </li>
        <li>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
        </li>
        <li>
          <h2>Genres</h2>
          <p>{movie.genres}</p>
        </li>
      </ul>
    </Wrapper>
  );
};

Informations.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    releaseYear: PropTypes.string,
    votePercentage: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.string,
  }).isRequired,
};

export default Informations;