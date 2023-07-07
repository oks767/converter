import styles from './Fielsd.module.scss';
const Field = (isActive, onShow) => {
  return (
    <>
      <input onClick={() => onShow} className={styles.input} type='number' />
    </>
  );
};

export default Field;
