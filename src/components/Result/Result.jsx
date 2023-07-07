import styles from './Result.module.scss';

const Result = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Avialable Portfolio</h2>
      <div className={styles.currence}>
        <img src='/public/bitcoin.svg' />
        <div className={styles.count}>123</div>
        <span>BTC</span>
      </div>
    </div>
  );
};

export default Result;
