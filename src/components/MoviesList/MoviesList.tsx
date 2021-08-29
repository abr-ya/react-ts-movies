import React from 'react';
import Loader from '../Loader/Loader';
import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from '../../interfaces';

interface IMovieList {
  data: IMovie[];
  loading: boolean;
}

const MoviesList = ({ data, loading }: IMovieList): JSX.Element => (
  <>
    { loading
      ? <Loader />
      : (
        <div className="row">
          { data.map((item) => (<MovieCard data={item} key={item.id} />)) }
        </div>
      )}
  </>
);

export default MoviesList;
