import styles from './index.module.scss';
import { IData } from '../../types/types';
import { useAppDispatch } from '../../hooks';
import { fetchHero } from '../../api';
import React from 'react';

function Card(props: IData) {
  const dispatch = useAppDispatch();
  const { image, name, id } = props;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const id = Number(event.currentTarget.dataset.id);
    dispatch(fetchHero(id));
  };

  return (
    <div className={styles.card} data-id={id} onClick={handleClick}>
      <img className={styles.card_image} src={image} alt={name} />
      <span className={styles.card_title}>{name}</span>
    </div>
  );
}

export default Card;
