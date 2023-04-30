import styles from './index.module.scss';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { closeModal } from '../../store/slices/searchSlice';
import React from 'react';

function ModalCard() {
  const { name, species, status, type, gender, location, image } = useAppSelector(
    (state) => state.search.hero
  );

  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = e;
    if (target === currentTarget) dispatch(closeModal());
  };

  return (
    <div className={styles.overlay} onClick={handleClick}>
      <div className={styles.card}>
        <img className={styles.card_image} src={image} alt={name} />
        <p className={styles.flex}>
          <span className={styles.bold}>Name:</span> {name}
        </p>
        <p className={styles.flex}>
          <span className={styles.bold}>Species:</span> {species}
        </p>
        <p className={styles.flex}>
          <span className={styles.bold}>Status:</span> {status}
        </p>
        {type.trim().length ? (
          <p className={styles.flex}>
            <span className={styles.bold}>Type:</span> {type}
          </p>
        ) : null}
        <p className={styles.flex}>
          <span className={styles.bold}>Gender:</span> {gender}
        </p>
        <p className={styles.flex}>
          <span className={styles.bold}>Location:</span> {location}
        </p>
        <span className={styles.card_close} onClick={() => dispatch(closeModal())}></span>
      </div>
    </div>
  );
}

export default ModalCard;
