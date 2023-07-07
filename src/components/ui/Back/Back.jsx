import styles from './Back.module.scss';
const Back = () => {
  return (
    <div>
      <button className={styles.button}>
        <img src='../../../../public/left-arrow.svg' />
      </button>
    </div>
  );
};

export default Back;
