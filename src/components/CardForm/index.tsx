import { PropsCardForm } from '../../types/types';
import styles from './index.module.scss';

function CardForm(props: PropsCardForm) {
  const { firstName, deliveryDate, product, options, payment, image } = props.card;
  return (
    <div className={styles.card}>
      <p>
        <img className={styles.card_image} src={image as string} alt={product} />
      </p>
      <p className={styles.flex}>
        <span className={styles.subtitle}>Your name:</span>
        <span>{firstName}</span>
      </p>
      <p className={styles.flex}>
        <span className={styles.subtitle}>Delivery date:</span>
        <span>{new Date(deliveryDate).toISOString().slice(0, 10)}</span>
      </p>
      <p className={styles.flex}>
        <span className={styles.subtitle}>Headphones:</span>
        <span>{product}</span>
      </p>
      <p className={styles.flex}>
        <span className={styles.subtitle}>Additional options:</span>
        <span className={styles.italic}>{options.join(', ')}</span>
      </p>
      <p className={styles.flex}>
        <span className={styles.subtitle}>Payment method:</span>
        <span>{payment}</span>
      </p>
    </div>
  );
}

export default CardForm;
