import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMovie } from '../interfaces';
import MovieCard from '../components/MovieCard/MovieCard';
import MovieLinks from '../components/MovieLinks/MovieLinks';
import Loader from '../components/Loader/Loader';

export interface IMoviePage {
  movie: IMovie[];
  // eslint-disable-next-line no-unused-vars
  getMovieSaga: (id: string) => void;
}

const MoviePage = ({ movie, getMovieSaga }: IMoviePage) => {
  const { id } = useParams();
  useEffect(() => {
    if (!movie[id]) {
      setTimeout(() => {
        console.log('запрос данных на фильм, искусственная задержка 0,5 сек');
        getMovieSaga(id);
      }, 500);
    }
  }, []);

  return (
    <div className="container">
      <h1>MoviePage</h1>
      <p>{`Это страница фильма: ${id}`}</p>
      {movie && movie[id]
        ? (
          <>
            <MovieCard data={movie[id]} />
            <MovieLinks site={movie[id].site} imdb={movie[id].imdb} />
          </>
        )
        : <Loader />}
    </div>
  );
};

export default MoviePage;
