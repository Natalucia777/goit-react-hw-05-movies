import { useEffect, useState, useRef } from 'react';
import { getDetails } from '../services/movies-api';
import {  Link, useLocation, useParams } from 'react-router-dom';
import { Message } from 'components/Message/Message';

function MovieDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/")
  
  useEffect(() => {
    
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default MovieDetailsPage;