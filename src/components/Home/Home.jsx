import styles from './Home.module.scss';
import stylesSettings from '../../assets/scss/settings.module.scss';
import { useNavigate } from 'react-router-dom';
const Home = ({ bgButton, heading = '', bgImage }) => {
  const navigate = useNavigate();
  return (
    <body className={stylesSettings.body}>
      <div className={stylesSettings.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div
              className={styles.img}
              style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
          </div>
          <div className={styles.middle}>{heading}</div>
          <div className={styles.bottom}>
            <button
              onClick={() => {
                navigate('/auth');
              }}
              className={styles.button}
            >
              <div
                className={styles.imgButton}
                style={{ backgroundImage: `url(${bgButton})` }}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;
