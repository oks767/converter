import keyboard from './keyboard.js';
import styles from './Keyboard.module.scss';
const Keyboard = () => {
  const htmlKeyboard = keyboard;

  let res = htmlKeyboard.map(function (item) {
    return (
      <div className={styles.item} key={htmlKeyboard}>
        {item}
      </div>
    );
  });
  return (
    <div className={styles.wrapper}>
      {res}
      <div className={styles.zero}>0</div>
    </div>
  );
};

export default Keyboard;
