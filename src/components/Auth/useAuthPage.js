import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import AuthService from '../../services/auth.service.js';

export const useAuthPage = () => {
  const [type, setType] = useState('login');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const { isAuth, setIsAuth } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/profile');
    }
  }, [isAuth]);

  const { mutate } = useMutation(
    ['auth'],
    ({ email, password }) => AuthService.main(email, password, type),
    {
      onSuccess: () => {
        setIsAuth(true);
        reset();
      },
    }
  );

  const onSubmit = (data) => {
    mutate(data);
    console.log(data);
  };

  return useMemo(() => ({
    register,
    handleSubmit,
    onSubmit,
    setType,
  }));
};
