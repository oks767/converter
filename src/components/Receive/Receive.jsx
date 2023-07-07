import Field from '../ui/Field/Field';
import SelectCurrence from '../ui/Select/Select';
import styles from './Receive.module.scss';

const Receive = () => {
  return (
    <div className={styles.border}>
      <h2 className={styles.heading}>Receive</h2>
      <div className={styles.wrapper}>
        <Field />
        <SelectCurrence />
      </div>
    </div>
  );
};

export default Receive;
