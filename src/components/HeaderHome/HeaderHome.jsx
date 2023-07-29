import { useNavigate } from 'react-router-dom';
import styles from './HeaderHome.module.scss';

const HeaderHome = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.account}>
        <img className={styles.img} src='' />
        <div
          onClick={() => {
            navigate('/settings');
          }}
          className={styles.name}
        >
          mywallet.fr.id
        </div>
      </div>

      <button className={styles.button}>Share</button>
    </div>
  );
};

export default HeaderHome;
