import styles from './ButtonHome.module.scss';

const ButtonHome = ({ buttonText = '', image }) => {
  return (
    <div>
      <button className={styles.button}>
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
