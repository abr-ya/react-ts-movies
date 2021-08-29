import React from 'react';
import Loader from '../Loader/Loader';
import MovieCard from '../MovieCard/MovieCard';

const MoviesList = ({ data, loading }) => (
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
