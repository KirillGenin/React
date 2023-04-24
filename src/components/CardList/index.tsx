import styles from './index.module.scss';
import Card from '../../components/Card';
import { useAppSelector } from '../../hooks';
import React from 'react';

function CardList() {
  const { data: heroes, error } = useAppSelector((state) => state.search);

  return (
    <div className={!error ? styles.wrapper : styles['wrapper-no']}>
      {!error ? heroes.map((hero) => <Card key={hero.id} {...hero} />) : error}
    </div>
  );
}

export default CardList;
