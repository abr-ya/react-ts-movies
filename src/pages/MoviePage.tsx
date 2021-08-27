import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Movie from '../components/tmdb/Movie';
// import MovieLinks from '../components/tmdb/MovieLinks';
// import Loader from '../components/ui/Loader';

export interface IMovie {
  id: string;
  name: string;
  overview: string;
  popularity: number;
  poster: string;
  release: string;
  voteAverage: number;
  voteCount: number;
  site: string;
  imdb: string;
}

export interface IMoviePage {
  movie: IMovie[];
  getMovieSaga: () => void;
}

const MoviePage = ({ movie, getMovieSaga }: IMoviePage) => {
  const { id } = useParams();
  useEffect(() => {
    if (!movie[id]) {
      setTimeout(() => {
        console.log('запрос данных на фильм ');
        getMovieSaga(id);
      }, 500);
    }
  }, []);

  return (
    <div className="container">
      <h1>MoviePage</h1>
      <p>{`Это страница фильма: ${id}`}</p>
      {/* <p>
        Страница отдельного фильма. Нужно посмотреть: что ещё из доп. данных вывести, кроме ссылок?
      </p>
      {movie && movie[id]
        ? (
          <>
            <Movie data={movie[id]} />
            <MovieLinks site={movie[id].site} imdb={movie[id].imdb} />
          </>
        )
        : <Loader />} */}
    </div>
  );
};

export default MoviePage;
