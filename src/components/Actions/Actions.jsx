import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Actions = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <List>
      {movies.map(({ id, name, title }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {name || title}
          </Link>
        </Item>
      ))}
    </List>
  );
};

Actions.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Actions;