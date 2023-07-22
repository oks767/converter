import styles from './Back.module.scss';
const Back = ({ clickHandler }) => {
  return (
    <div>
      <button onClick={clickHandler} className={styles.button}>
        <img src='../../../../public/left-arrow.svg' />
      </button>
    </div>
  );
};

export default Back;
