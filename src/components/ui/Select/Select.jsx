import style from './Select.module.scss';
import Select from 'react-select';
import options from './options.js';

const SelectCurrence = () => {
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
        options={options}
        styles={customStyles}
        defaultValue={[options[0]]}
        components={{ IndicatorSeparator: () => null }}
      />
    </div>
  );
};

export default SelectCurrence;
