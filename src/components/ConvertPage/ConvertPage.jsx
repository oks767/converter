import stylesSetting from '../../assets/scss/settings.module.scss';
import styles from './ConvertPage.module.scss';
import Back from '../ui/Back/Back';

import Receive from '../Receive/Receive';
import ButtonConvert from '../ui/ButtonConvert/ButtonConvert';
import Result from '../Result/Result';
import Exchange from '../Exchange/Exchange';
import Keyboard from '../ui/Keyboard/Keyboard.jsx';
import { useNavigate } from 'react-router-dom';

import SelectCurrence from '../ui/Select/Select';
import { useState } from 'react';

const { body, container, wrap } = stylesSetting;
function ConvertPage() {
  const navigate = useNavigate();
  const buttons = [
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
    { text: '6', value: '6' },
    { text: '7', value: '7' },
    { text: '8', value: '8' },
    { text: '9', value: '9' },
    { text: '0', value: '0' },
    { text: '.', value: '.' },
    { text: 'Clear', value: 'clear' },
  ];
  const [inputValue, setInputValue] = useState('');

  const handleKeyboardClick = (key) => {
    if (key === 'clear') {
      setInputValue(inputValue.slice(0, -1));
    } else {
      setInputValue(inputValue + key);
    }
  };

  return (
    <div className={body}>
      <div className={container}>
        <div className={wrap}>
          <Back
            clickHandler={() => {
              navigate('/profile');
            }}
          />
          <h1 className={styles.heading}>Convert</h1>
        </div>
        <ButtonConvert />
        <div className={styles.border}>
          <h2 className={styles.heading}>Send</h2>
          <div className={styles.wrapper}>
            <input className={styles.input} value={inputValue} readOnly />
            <SelectCurrence />
          </div>
        </div>
        <Receive />
        <Result />
        <Exchange />
        <Keyboard onClick={handleKeyboardClick} buttons={buttons} />
      </div>
    </div>
  );
}

export default ConvertPage;
