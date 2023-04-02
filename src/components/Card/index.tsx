import { Product } from '../../types/types';
import styles from './index.module.scss';

function Card(props: Product) {
  return (
    <div className={styles.card}>
      <p>
        <img className={styles.card_image} src={props.image} alt={props.title} />
      </p>
      <p className={styles.flex}>
        <b>Name:</b> {props.title}
      </p>
      <p className={styles.flex}>
        <b>Brand:</b> {props.brand}
      </p>
      <p className={styles.flex}>
        <b>Type:</b> {props.type}
      </p>
      <p className={styles.flex}>
        <b>Membrane diameter:</b> {props.membrane}
      </p>
      <p className={styles.italic}>{props.description}</p>
      <p className={styles.flex}>
        <b>Price:</b> {props.price} $
      </p>
    </div>
  );
}

export default Card;
