import * as api from '../../api/movie-service';
import {
  FIND_MOVIES, GET_MOVIE, GET_DISCOVER, SET_LOADING, GET_MOVIE_SAGA, SET_MOVIE,
} from './movieTypes';

export const findMovies = (query: string, page: number) => {
  const response = api.findMovies(query, page);
  // console.log(response); // здесь промис => reduxPromise

  return {
    type: FIND_MOVIES,
    payload: response,
  };
};

export const getDiscover = (query: string, page: number) => {
  const response = api.getDiscover(query, page);

  return {
    type: GET_DISCOVER,
    payload: response,
  };
};

export const getMovie = (id: string) => {
  const response = api.getMovie(id);
  console.log(response);

  return {
    type: GET_MOVIE,
    payload: response,
  };
};

export const setMovie = (data: any) => {
  console.log('setMovie', data);

  return {
    type: SET_MOVIE,
    payload: data,
  };
};

export const getMovieSaga = (id: string) => ({
  type: GET_MOVIE_SAGA,
  payload: id,
});

export const setLoading = (flag: boolean) => ({
  type: SET_LOADING,
  payload: flag,
});
