import React from 'react';
import Loader from '../Loader/Loader';
import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from '../../interfaces';

interface IMovieList {
  data?: IMovie[]; // из-за падения сборки и контейнера - проверить ToDo!
  loading?: boolean; // из-за падения сборки и контейнера - проверить ToDo!
}

const MoviesList = ({ data, loading }: IMovieList): JSX.Element => (
  <>
    { loading
      ? <Loader />
      : (
        <div className="row">
          { data && Array.isArray(data) // проверка, если не обязательно - ToDo!
            && data.map((item) => (<MovieCard data={item} key={item.id} />)) }
        </div>
      )}
  </>
);

export default MoviesList;
