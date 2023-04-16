import styles from './index.module.scss';
import { useRef, useEffect, useState, SetStateAction } from 'react';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks';
import { setQuery } from '../../store/slices/searchSlice';

function Search() {
  const dispatch = useAppDispatch();
  const [query, setInputQuery] = useState(useAppSelector((state) => state.search.query));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputQuery(query);
    const input = inputRef.current;

    return () => {
      if (input) {
        dispatch(setQuery(input.value));
      }
    };
  }, []);

  const changeQuery = (event: { target: { value: SetStateAction<string> } }) => {
    setInputQuery(event.target.value);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.icon}></span>
        <input
          type="text"
          className={styles.search}
          ref={inputRef}
          value={query}
          onChange={changeQuery}
        />
      </div>
    </>
  );
}

export default Search;
