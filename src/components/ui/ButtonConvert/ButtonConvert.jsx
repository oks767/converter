import styles from './ButtonConvert.module.scss';
const ButtonConvert = () => {
  return (
    <div className={styles.button}>
      <div className={styles.wrapper}>
        <img className={styles.up} src='/public/up.svg' />
        <img className={styles.down} src='/public/down.svg' />
      </div>
    </div>
  );
};

export default ButtonConvert;
