import styles from './index.module.scss';

function Form() {
  return (
    <>
      <form className={styles.form}>
        <label className={styles.flex1}>
          <span className={styles.subtitle}>Your name</span>
          <input className={styles.input} type="text" />
        </label>
        <label className={styles.flex1}>
          <span className={styles.subtitle}>Delivery date</span>
          <input className={styles.input} type="date" name="date" />
        </label>
        <label className={styles.flex1}>
          <span className={styles.subtitle}>Headphones</span>
          <select className={styles.input} name="product">
            <option value="">--Model--</option>
            <option value="Sennheiser Momentum 4 Black">Sennheiser Momentum 4 Black</option>
            <option value="Marshall Minor III Black">Marshall Minor III Black</option>
            <option value="Jabra Elite 2 Navy">Jabra Elite 2 Navy</option>
            <option value="Philips Fidelio L3 Black">Philips Fidelio L3 Black</option>
            <option value="Sony WI-C100 Black">Sony WI-C100 Black</option>
            <option value="Anker Powerconf H700 Blue">Anker Powerconf H700 Blue</option>
          </select>
        </label>
        <p className={styles.flex1}>
          <span className={styles.subtitle}>Additional options</span>
          <label className={styles.flex2}>
            <input type="checkbox" name="options" value="Express delivery" />
            <span>Express delivery</span>
          </label>
          <label className={styles.flex2}>
            <input type="checkbox" name="options" value="Gift wrap" />
            <span>Gift wrap</span>
          </label>
          <label className={styles.flex2}>
            <input type="checkbox" name="options" value="Additional one year warranty" />
            <span>Additional one year warranty</span>
          </label>
          <label className={styles.flex2}>
            <input type="checkbox" name="options" value="Assistance with setup" />
            <span>Assistance with setup</span>
          </label>
        </p>
        <p className={styles.flex1}>
          <span className={styles.subtitle}>Payment method</span>
          <label className={styles.flex2}>
            <input type="radio" name="personal" value="Cash upon receipt" />
            <span>Cash upon receipt</span>
          </label>
          <label className={styles.flex2}>
            <input type="radio" name="personal" value="Credit card upon receipt" />
            <span>Credit card upon receipt</span>
          </label>
          <label className={styles.flex2}>
            <input type="radio" name="personal" value="Credit card online" />
            <span>Credit card online</span>
          </label>
          <label className={styles.flex2}>
            <input type="radio" name="personal" value="Bonuses" />
            <span>Bonuses</span>
          </label>
        </p>
        <label className={styles.flex1}>
          <span className={styles.subtitle}>Upload any image</span>
          <input className={styles.input} type="file" name="image" />
        </label>
        <button className={styles.btn} type="submit">
          send
        </button>
      </form>
    </>
  );
}

export default Form;
