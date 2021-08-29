import React, { useState } from 'react';
import Select from 'react-select';
import Pagination from '../Pagination/Pagination';
import BsSearch from '../BsSearch/BsSearch';
import styles from './RequestSetup.module.scss';

interface IRequestSetup {
  setters: {[key: string]: (arg: string | number) => void}
  query: string;
  page: number;
  pages: number;
}
interface ISortingOption {
  value: string;
  label: string;
}

const RequestSetup = ({
  setters, query, page, pages,
}: IRequestSetup): JSX.Element => {
  const { setPage, setSorting, setQuery } = setters;

  const [innerSorting, setInnerSorting] = useState<ISortingOption | null>(null);

  const sortingOptions: ISortingOption[] = [
    { value: 'popularity.desc', label: 'sort by Popularity' },
    { value: 'vote_average.desc', label: 'sort by Rating' },
  ];

  const sortingHandler = (selectedOption: ISortingOption) => {
    setQuery('');
    setPage(1);
    setInnerSorting(selectedOption);
    setSorting(selectedOption.value);
  };

  const pageHandler = (newPage: number) => {
    setPage(newPage);
  };

  const searchHandler = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setInnerSorting(null);
  };

  return (
    <>
      <div className={styles.selectWrapper}>
        <BsSearch setter={searchHandler} value={query} />
        <Select
          className={styles.select}
          placeholder="... или подборка"
          value={innerSorting}
          onChange={sortingHandler}
          options={sortingOptions}
        />
      </div>
      <Pagination active={page} pages={pages} setActive={pageHandler} />
    </>
  );
};

export default RequestSetup;
