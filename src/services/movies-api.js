import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const KEY = '7b381c0941b126eabbbca88209330c37';
// export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

axios.defaults.headers.common['Authorization'] =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjM4MWMwOTQxYjEyNmVhYmJiY2E4ODIwOTMzMGMzNyIsInN1YiI6IjY0YzE4YzcyMTNhMzIwMDExYzVmNWQ2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w5Zdux52JzMaXxGEE-7rWODXXVwXs963VxqsHLpWRto';

// export const getAllMovie = async stringToSearch => {
//   const queryString = `trending/all/day?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${stringToSearch}`;
//   const { data } = await axios.get(queryString);
//   return data;
// };
export const getAllMovie = async () => {
  const response = await axios.get('trending/all/day?');
  console.log(response.data);
  return response.data;
};
// export const getDetails = async movieId => {
//   const queryString = `movie/${movieId}$?api_key=${KEY}&language=en-US`;
//   const { data: movie } = await axios.get(queryString);
//   return movie;
// };
export const getDetails = async id => {
  const response = await axios.get(`movie/${id}`);
  console.log(response.data);
  return response.data;
};
// export const getSearchMovie = async stringToSearch => {
//   const queryString = `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${stringToSearch}`;
//   const { data: movies } = await axios.get(queryString);
//   return movies;
// };
export const getSearchMovie = async ({ search, abortCtrl }) => {
  const response = await axios.get(`search/movie?query=${search}`, {
    signal: abortCtrl.signal,
  });
  console.log(response.data);
  return response.data;
};
// export const getMovieCast = async movieId => {
//   const queryString = `movie/${movieId}/credits$?api_key={apiKey}&language=en-US`;
//   const { data } = await axios.get(queryString);
//   return data;
// };
export const getMovieCast = async id => {
  const response = await axios.get(`movie/${id}/credits`);
  console.log(response.data);
  return response.data;
};
// export const getRevMovie = async movieId => {
//   const queryString = `movie/${movieId}/reviews$?api_key={apiKey}&language=en-US`;
//   const { data } = await axios.get(queryString);
//   return data;
// };
export const getRevMovie = async id => {
  const response = await axios.get(`movie/${id}/reviews`);
  console.log(response.data);
  return response.data;
};