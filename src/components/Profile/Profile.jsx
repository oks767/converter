import styles from './Profile.module.scss';
import stylesSetting from '../../assets/scss/settings.module.scss';
import HeaderHome from '../HeaderHome/HeaderHome';

import SelectCurrence from '../ui/Select/Select';
import { useState } from 'react';

import ButtonHome from '../ui/ButtonHome/ButtonHome';
import AssetsCurrently from '../AssetsCurrently/AssetsCurrently.jsx';
import { useNavigate } from 'react-router-dom';
const { body, container, wrap } = stylesSetting;
const Profile = ({ heading = '' }) => {
  const [value, setValue] = useState(12344);
  const navigate = useNavigate();
  return (
    <body className={body}>
      <div className={container}>
        <HeaderHome />
        <div className={wrap}>
          <div className={styles.border}>
            <h2 className={styles.heading}>{heading}</h2>
            <div className={styles.wrapper}>
              <input className={styles.input} type='number' />
              <SelectCurrence />
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <ButtonHome buttonText='Send' image='/public/enter.svg' />
          <ButtonHome
            buttonText='Convert'
            image='/public/convert.svg'
            clickHandler={() => {
              navigate('/convert');
            }}
          />
          <ButtonHome buttonText='Deposit' image='/public/down.svg' />
        </div>
        <AssetsCurrently
          currently='Bitcoin'
          image='/public/bitcoin.svg'
          currentlyTwo='BTC'
          heading='My assets'
        />
      </div>
    </body>
  );
};

export default Profile;
