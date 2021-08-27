import { connect } from 'react-redux';
import MoviePage from './MoviePage';
import {
  getMovieSaga,
} from '../redux/actions/movieActions';

const mapStateToProps = (state: any) => ({
  movie: state.movies.movie,
});

const mapDispatchToProps = {
  getMovieSaga,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
