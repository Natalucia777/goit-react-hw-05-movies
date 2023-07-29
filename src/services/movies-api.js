import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = '7b381c0941b126eabbbca88209330c37';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

// axios.defaults.headers.common['Authorization'] =
//   '7b381c0941b126eabbbca88209330c37';
export const getAllMovie = async stringToSearch => {
  const queryString = `trending/all/day?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${stringToSearch}`;
  const { data } = await axios.get(queryString);
  return data;
};
export const getDetails = async movieId => {
  const queryString = `movie/${movieId}$?api_key=${KEY}&language=en-US`;
  const { data: movie } = await axios.get(queryString);
  return movie;
};
export const getSearchMovie = async stringToSearch => {
  const queryString = `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${stringToSearch}`;
  const { data: movies } = await axios.get(queryString);
  return movies;
};

export const getMovieCast = async movieId => {
  const queryString = `movie/${movieId}/credits$?api_key={apiKey}&language=en-US`;
  const { data } = await axios.get(queryString);
  return data;
};






export const getRevMovie = async movieId => {
  const queryString = `movie/${movieId}/reviews$?api_key={apiKey}&language=en-US`;
  const { data } = await axios.get(queryString);
  return data;
};





