import styles from './HeaderHome.module.scss';

const HeaderHome = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.account}>
        <img className={styles.img} src='' />
        <div className={styles.name}>mywallet.fr.id</div>
      </div>

      <button className={styles.button}>Share</button>
    </div>
  );
};

export default HeaderHome;
