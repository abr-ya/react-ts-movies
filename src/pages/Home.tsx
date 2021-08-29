import React, { useState, useEffect } from 'react';
import RequestSetup from '../components/RequestSetup/RequestSetup';
import MoviesList from '../components/MoviesList/MoviesListContainer';

const Home = ({
  // tmdb, findMovies, getDiscover,
  setLoading, getDiscoverSaga, findMoviesSaga,
}) => {
  // const [movies, setMovies] = useState([]);
  // const [pager, setPager] = useState(null);
  const [sorting, setSorting] = useState('popularity.desc');
  const [query, setQueryState] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(query, page, sorting);
    setLoading(true); // лоадинг здесь для эмуляции "долгой" загрузки
    if (query) { // в управляющих компонентах мы чистим query, когда discover
      setTimeout(() => {
        findMoviesSaga(query, page);
      }, 200);
    } else {
      getDiscoverSaga(sorting, page);
    }
  }, [query, page, sorting]);

  // useEffect(() => {
  //   if (tmdb.data && Array.isArray(tmdb.data)) {
  //     const { data: resData, pager: resPager } = tmdb;
  //     setMovies(resData);
  //     setPager(resPager);
  //   }
  // }, [tmdb]);

  const setQuery = (text: string) => {
    setPage(1);
    setQueryState(text);
  };

  const setters = {
    setPage,
    setSorting,
    setQuery,
  };

  const control = {
    query,
    page,
  };

  return (
    <div className="container">
      <h1>React API - TMDB</h1>
      <p>
        К сожалению, и API TMDB оказался не идеален для нашей задачи.
        При поиске по базе нельзя использовать сортировку.
        Сортировка работает в подборках, но они без поисковой фразы.
        Поэтому левая и правая часть работают каждая сама по себе...
      </p>
      <RequestSetup
        setters={setters}
        control={control}
        pages={10}
      />
      <MoviesList />
    </div>
  );
};

export default Home;
