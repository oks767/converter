import styles from './Settings.module.scss';
import stylesSetting from '../../assets/scss/settings.module.scss';
const Settings = ({ bgImage }) => {
  const { container, wrap } = stylesSetting;
  return (
    <div className={wrap}>
      <div className={container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div
              className={styles.img}
              style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
          </div>
          <form className={styles.form}>
            <input placeholder='Send name' type='text' />
            <input placeholder='Change email' type='email' />
            <input placeholder='Change password' type='password' />
            <label className={styles.labelAvatar}>Send avatar </label>
            <input className={styles.sendAvatar} type='file' name='avatar' />
            <button type='submit'>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
