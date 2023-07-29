import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '7b381c0941b126eabbbca88209330c37',
  },
});

export const getAllMovie = async () => {
  const response = await instance.get(`trending/movie/day?`);
  console.log(response.data);
  return response.data;
};

export const getDetails = async id => {
  const response = await instance.get(`/movie/${id}`);
  console.log(response.data);
  return response.data;
};

export const getSearchMovie = async ({ search, abortCtrl }) => {
  const response = await instance.get(`/search/movie?query=${search}`, {
    signal: abortCtrl.signal,
  });
  console.log(response.data);
  return response.data;
};

export const getMovieCast = async id => {
  const response = await instance.get(`/movie/${id}/credits`);
  console.log(response.data);
  return response.data;
};

export const getRevMovie = async id => {
  const response = await instance.get(`/movie/${id}/reviews`);
  console.log(response.data);
  return response.data;
};  