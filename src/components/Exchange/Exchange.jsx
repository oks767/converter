import styles from './Exchange.module.scss';

const Exchange = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Exchange fee</h2>
        <p className={styles.text}>Read terms and condition</p>
      </div>
      <div className={styles.currence}>40$</div>
    </div>
  );
};

export default Exchange;
