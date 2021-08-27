import { connect } from 'react-redux';
import ApiTmdb from './ApiTmdb';
import { findMovies, getDiscover, setLoading } from '../redux/actions/movieActions';

const mapStateToProps = (state) => ({
  tmdb: state.movies,
});

const mapDispatchToProps = {
  findMovies,
  getDiscover,
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiTmdb);
