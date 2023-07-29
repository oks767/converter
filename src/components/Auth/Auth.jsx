import styles from './Auth.module.scss';
import styleSettings from '../../assets/scss/settings.module.scss';
import { useForm } from 'react-hook-form';
const { body, container } = styleSettings;
const Auth = ({ bgImage }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <body className={body}>
      <div className={container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div
              className={styles.img}
              style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder='email'
              className={styles.input}
              type='email'
              {...register('email')}
            />
            <input
              placeholder='password'
              className={styles.input}
              type='password'
              {...register('password', { required: true })}
            />
            {errors.password && (
              <div className={styles.required}>This field is required</div>
            )}
            <div className={styles.buttonWrapper}>
              <button className={styles.button} type='submit'>
                Sign In
              </button>
              <button className={styles.button} type='submit'>
                Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Auth;
