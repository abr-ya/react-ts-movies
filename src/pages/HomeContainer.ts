import { connect } from 'react-redux';
import Home from './Home';
import { setLoading, getDiscoverSaga, findMoviesSaga } from '../redux/actions/movieActions';

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = {
  setLoading,
  getDiscoverSaga,
  findMoviesSaga,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
