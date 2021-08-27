import { ActionType, getType } from 'typesafe-actions';
import * as actions from '../actions/movieActions';

type moviesStateType = Readonly<{
  data: any[];
  pager: any;
  movie: any;
  loading: boolean;
}>;

const movies: moviesStateType = {
  data: [],
  pager: {},
  movie: {},
  loading: true,
};

export type movieActions = ActionType<typeof actions>;

const moviesReducer = (state = movies, action: movieActions): moviesStateType => {
  switch (action.type) {
    case getType(actions.setLoading):
      return { ...state, loading: action.payload as boolean };
    // case getType(actions.findMovies):
    //   return { ...state, ...action.payload, loading: false };
    // case getType(actions.getDiscover):
    //   return { ...state, ...action.payload, loading: false };
    case getType(actions.setMovie):
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
