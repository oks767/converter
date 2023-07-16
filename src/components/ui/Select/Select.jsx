import style from './Select.module.scss';
import Select from 'react-select';
import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL = 'https://openexchangerates.org/api/currencies.json';
const SelectCurrence = () => {
  const [get, setGet] = useState(null);
  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setGet(res.data);
    });
  }, []);
  if (!get) return null;
  let arrayCurrency = Object.keys(get).map((e) => ({
    value: e,
    label: e,
  }));

  const customStyles = {
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: 'transparent',
      border: 'none',
    }),

    option: (defaultStyles, state) => ({
      ...defaultStyles,
      borderBottom: '2px thick brown',
      backgroundColor: state.isSelected
        ? '#121317'
        : state.isFocused
        ? 'pink'
        : undefined,
    }),
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      color: '#000',
    }),
  };
  return (
    <div className={style.wrapper}>
      {/* <select>
        BTC
        <option>USA</option>
        <option>RUB</option>
      </select> */}
      <Select
        options={arrayCurrency}
        styles={customStyles}
        defaultValue={arrayCurrency[0]}
        components={{ IndicatorSeparator: () => null }}
      />
    </div>
  );
};

export default SelectCurrence;
