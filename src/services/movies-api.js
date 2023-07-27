import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = '1c946dce2b60cb636de6f72a25cb04da';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

// axios.defaults.headers.common['Authorization'] =
//   '1c946dce2b60cb636de6f72a25cb04da';


export const getSearchMovie = async stringToSearch => {
  const queryString = `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${stringToSearch}`;
  const { data: movies } = await axios.get(queryString);
  return movies;
};

export const getDetails = async movieId => {
  const queryString = `movie/${movieId}$?api_key=${KEY}&language=en-US`;
  const { data: movie } = await axios.get(queryString);
  return movie;
};

export const getRevMovie = async movieId => {
  const queryString = `movie/${movieId}/reviews$?api_key={apiKey}&language=en-US`;
  const { data } = await axios.get(queryString);
  return data;
};

export const getAllMovie = async stringToSearch => {
  const queryString = `trending/all/day?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${stringToSearch}`;
  const { data } = await axios.get(queryString);
  return data;
};

export const getMovieCast = async movieId => {
  const queryString = `movie/${movieId}/credits$?api_key={apiKey}&language=en-US`;
  const { data } = await axios.get(queryString);
  return data;
};

