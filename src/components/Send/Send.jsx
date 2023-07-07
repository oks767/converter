import Field from '../ui/Field/Field';
import SelectCurrence from '../ui/Select/Select';
import styles from './Send.module.scss';

const Send = () => {
  return (
    <div className={styles.border}>
      <h2 className={styles.heading}>Send</h2>
      <div className={styles.wrapper}>
        <Field />
        <SelectCurrence />
      </div>
    </div>
  );
};

export default Send;
