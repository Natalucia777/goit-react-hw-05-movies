import { useEffect, useState, useRef } from 'react';
import { getDetails } from '../services/movies-api';
import {  Link, useLocation, useParams } from 'react-router-dom';
import { Message } from 'components/Message/Message';
import Informations from 'components/Informations/Informations';
import { TiArrowLeftThick } from "react-icons/ti";
import  AboutTheFilm from 'components/AboutTheFilm/AboutTheFilm';

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
      <AboutTheFilm/>
    </div>
  );
  
}


export default MovieDetailsPage;