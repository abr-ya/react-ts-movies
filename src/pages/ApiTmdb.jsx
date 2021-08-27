import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { movieFields } from '../api/tmdb';
import CardsWrapper from '../components/tmdb/CardsWrapper';

const ApiTmdb = ({
  tmdb, findMovies, getDiscover, setLoading,
}) => {
  const [movies, setMovies] = useState([]);
  const [pager, setPager] = useState(null);
  const [sorting, setSorting] = useState('popularity.desc');
  const [query, setQueryState] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    if (query) { // в управляющих компонентах мы чистим query, когда discover
      setTimeout(() => {
        findMovies(query, page);
      }, 200);
    } else {
      getDiscover(sorting, page);
    }
  }, [query, page, sorting]);

  useEffect(() => {
    if (tmdb.data && Array.isArray(tmdb.data)) {
      const { data: resData, pager: resPager } = tmdb;
      setMovies(resData);
      setPager(resPager);
    }
  }, [tmdb]);

  const setQuery = (text) => {
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
      <CardsWrapper
        data={movies}
        setters={setters}
        loading={tmdb.loading}
        control={control}
        pages={pager && pager.total ? pager.total : 10}
      />
    </div>
  );
};

ApiTmdb.propTypes = {
  tmdb: PropTypes.shape({
    data: PropTypes.arrayOf(movieFields).isRequired,
    pager: PropTypes.shape({
      page: PropTypes.number,
      total: PropTypes.number,
    }),
    loading: PropTypes.bool,
  }).isRequired,
  findMovies: PropTypes.func.isRequired,
  getDiscover: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default ApiTmdb;
