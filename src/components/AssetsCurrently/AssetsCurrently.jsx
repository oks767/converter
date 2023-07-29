import styles from './AssetsCurrently.module.scss';

const AssetsCurrently = ({
  currently = '',
  image,
  currentlyTwo = '',
  heading = '',
}) => {
  return (
    <>
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.wrapper}>
        <div className={styles.currently}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className={styles.currentlyChange}>
            <p className={styles.currentlyText}>{currently}</p>
            <p className={styles.currentlyTextTwo}>{currentlyTwo}</p>
          </div>
        </div>
        <div className={styles.currentlyNumber}>
          <p className={styles.myCurrently}>1233</p>
          <p className={styles.myCurrentlyTwo}>12243653</p>
        </div>
      </div>
    </>
  );
};

export default AssetsCurrently;
