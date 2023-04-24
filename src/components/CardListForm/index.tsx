import styles from './index.module.scss';
import CardForm from '../../components/CardForm';
import { useAppSelector } from '../../hooks';
import React from 'react';

function CardListForm() {
  const cards = useAppSelector((state) => state.form.cards);

  return (
    <div className={styles.wrapper}>
      {cards.map((card, index) => (
        <CardForm card={card} key={index} />
      ))}
    </div>
  );
}

export default CardListForm;
