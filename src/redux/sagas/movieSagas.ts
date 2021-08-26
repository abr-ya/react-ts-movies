import { takeLatest, put, call } from 'redux-saga/effects'; // call // takeEvery, select
import * as api from '../../api/movie-service';
import * as movieActions from '../actions/movieActions';
import * as movieTypes from '../actions/movieTypes';

function* getMovieSagaSaga(action: ReturnType<typeof movieActions.getMovieSaga>) {
  try {
    console.log('сага пошла!');
    yield put(movieActions.setLoading(true));
    const response = yield call(api.getMovie, action.payload); // когда сервер работает
    yield put(movieActions.setMovie(response)); // response.data, если не обработали в апи!
    yield put(movieActions.setLoading(false));
  } catch (error) {
    console.error(error);
  }
}

export default function* watchEntities() {
  yield takeLatest(movieTypes.GET_MOVIE_SAGA, getMovieSagaSaga);
}
