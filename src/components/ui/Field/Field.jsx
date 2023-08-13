import styles from './Fielsd.module.scss';

const Field = ({ value = '1' }) => {
  return (
    <>
      <span className={styles.input}></span>
    </>
  );
};

export default Field;
