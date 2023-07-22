import styles from './ButtonHome.module.scss';

const ButtonHome = ({ buttonText = '', image, clickHandler }) => {
  return (
    <div>
      <button onClick={clickHandler} className={styles.button}>
        {buttonText}
        <img
          className={styles.img}
          style={{ backgroundImage: `url(${image})` }}
        />
      </button>
    </div>
  );
};

export default ButtonHome;
