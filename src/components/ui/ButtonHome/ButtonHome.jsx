import styles from './ButtonHome.module.scss';

const ButtonHome = ({ buttonText = '', image, clickHandler }) => {
  return (
    <div>
      <button onClick={clickHandler} className={styles.button}>
        {buttonText}
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </button>
    </div>
  );
};

export default ButtonHome;
