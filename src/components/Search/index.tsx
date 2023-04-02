import styles from './index.module.scss';
import { useRef, useEffect, useState, SetStateAction } from 'react';

function Search() {
  const [query, setQuery] = useState(localStorage.getItem('query') || '');
  const inputRef = useRef<HTMLInputElement>(null);
  console.log('Рендер');

  useEffect(() => {
    console.log('Инпут примонтирован');
    const input = inputRef.current;
    const localQuery = localStorage.getItem('query');
    if (localQuery !== null) {
      setQuery(localQuery);
    }

    return () => {
      console.log('unmount');
      if (input) {
        console.log('Input unmount: ', input.value);
        localStorage.setItem('query', input.value);
      }
    };
  }, []);

  const changeQuery = (event: { target: { value: SetStateAction<string> } }) => {
    console.log('Value: ', event.target.value);
    setQuery(event.target.value);
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
