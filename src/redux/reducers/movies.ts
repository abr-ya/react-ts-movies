import {
  FIND_MOVIES, GET_MOVIE, GET_DISCOVER, SET_LOADING,
} from '../actions/movieTypes';

const movies = {
  data: [],
  pager: {},
  movie: {},
  loading: true,
};

const moviesReducer = (state = movies, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case FIND_MOVIES:
      return { ...state, ...action.payload, loading: false };
    case GET_DISCOVER:
      return { ...state, ...action.payload, loading: false };
    case GET_MOVIE:
      return {
        ...state,
        movie: {
          ...state.movie,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default moviesReducer;
