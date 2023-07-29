import stylesSetting from '../../assets/scss/settings.module.scss';
import styles from './ConvertPage.module.scss';
import Back from '../ui/Back/Back';
import Send from '../Send/Send';
import Receive from '../Receive/Receive';
import ButtonConvert from '../ui/ButtonConvert/ButtonConvert';
import Result from '../Result/Result';
import Exchange from '../Exchange/Exchange';
import Keyboard from '../ui/Keyboard/Keyboard.jsx';
import { useNavigate } from 'react-router-dom';

const { body, container, wrap } = stylesSetting;
function ConvertPage() {
  const navigate = useNavigate();
  return (
    <>
      <body className={body}>
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
          <Send />
          <Receive />
          <Result />
          <Exchange />
          <Keyboard />
        </div>
      </body>
    </>
  );
}

export default ConvertPage;
