import styles from './Keyboard.module.scss';
const Keyboard = ({ onClick, buttons, value }) => {
  // const { handleKeyboardClick, inputValue } = useInputValue();

  // const res = keyboard.map(function (button) {
  //   return (
  //     <div
  //       key={button.value}
  //       className={styles.item}
  //       onClick={onClick(button.value)}
  //     >
  //       {button.text}
  //     </div>
  //   );
  // });
  // return <div className={styles.wrapper}>{res}</div>;

  return (
    <div className={styles.wrapper}>
      {buttons.map((button) => (
        <button
          className={styles.item}
          key={button.value}
          onClick={() => onClick(button.value)}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
