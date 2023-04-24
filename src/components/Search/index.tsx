import styles from './index.module.scss';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks';
import { setQuery } from '../../store/slices/searchSlice';
import { fetchData } from '../../store/slices/searchSlice';
import React from 'react';

function Search() {
  const dispatch = useAppDispatch();
  const [query, setInputQuery] = useState(useAppSelector((state) => state.search.query));

  const changeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value;
    dispatch(setQuery(input));
    setInputQuery(input);
  };

  const handleClick = () => {
    if (query.trim()) dispatch(fetchData(query.trim()));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.icon} onClick={handleClick}></span>
        <input
          type="text"
          className={styles.search}
          value={query}
          placeholder="For example: Rick, Morty.."
          onChange={changeQuery}
        />
      </div>
    </>
  );
}

export default Search;
