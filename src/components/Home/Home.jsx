import styles from './Home.module.scss';
import stylesSetting from '../../assets/scss/settings.module.scss';
import HeaderHome from '../HeaderHome/HeaderHome';

import SelectCurrence from '../ui/Select/Select';
import { useState } from 'react';

import ButtonHome from '../ui/ButtonHome/ButtonHome';
const { body, container, wrap } = stylesSetting;
const Home = ({ heading = '' }) => {
  const [value, setValue] = useState(12344);
  return (
    <body className={body}>
      <div className={container}>
        <HeaderHome />
        <div className={wrap}>
          <div className={styles.border}>
            <h2 className={styles.heading}>{heading}</h2>
            <div className={styles.wrapper}>
              <input className={styles.input} type='number' value={value} />
              <SelectCurrence />
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <ButtonHome buttonText='Send' image='/public/enter.svg' />
          <ButtonHome buttonText='Convert' image='/public/convert.svg' />
          <ButtonHome buttonText='Deposit' image='/public/down.svg' />
        </div>
      </div>
    </body>
  );
};

export default Home;
