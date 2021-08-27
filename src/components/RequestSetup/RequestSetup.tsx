import React, { useState } from 'react';
import Select from 'react-select';
import Pagination from '../Pagination/Pagination';
import BsSearch from '../BsSearch/BsSearch';
import styles from './RequestSetup.module.scss';

const RequestSetup = ({
  data, setters, loading, pages, control,
}) => {
  const { setPage, setSorting, setQuery } = setters; // , setDirection

  const [active, setActive] = useState(1);
  const [innerSorting, setInnerSorting] = useState(null);

  const sortingOptions = [
    { value: 'popularity.desc', label: 'sort by Popularity' },
    { value: 'vote_average.desc', label: 'sort by Rating' },
  ];

  const sortingHandler = (selectedOption) => {
    setQuery('');
    setActive(1);
    setInnerSorting(selectedOption);
    setSorting(selectedOption.value);
  };

  const pageHandler = (page) => {
    setActive(page);
    setPage(page);
  };

  const searchHandler = (query) => {
    setQuery(query);
    setActive(1);
    setInnerSorting(null);
  };

  return (
    <>
      <div className={styles.selectWrapper}>
        <BsSearch setter={searchHandler} value={control.query} />
        <Select
          className={styles.select}
          placeholder="... или подборка"
          value={innerSorting}
          onChange={sortingHandler}
          options={sortingOptions}
        />
      </div>
      <Pagination active={active} pages={pages} setActive={pageHandler} />
    </>
  );
};

export default RequestSetup;
