import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  const onGoBack = () => {
    history.push('/');
  };
  return (
    <>
      <h2>404 Not Found </h2>
      <button type="button" onClick={onGoBack}>
        Go home
      </button>
    </>
  );
}

export default NotFound;
