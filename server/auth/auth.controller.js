import { prisma } from '../prisma.js';
import asyncHandler from 'express-async-handler';
import { generateToken } from './generate-token.js';
import { hash, verify } from 'argon2';
import { userFields } from '../utils/user.utils.js';

// registerUser
// POST api/auth/register
// Public
export const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const isHaveUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (isHaveUser) {
    res.status(400);
    throw new Error('Пользователь уже существует');
  }

  const user = await prisma.user.create({
    data: {
      email,
      password: await hash(password),
    },

    select: userFields,
  });

  const token = generateToken(user.id);
  res.json({ user, token });
});
// authUser
// POST api/auth/login
// Private
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  const isValidePassword = await verify(user.password, password);

  if (user && isValidePassword) {
    const token = generateToken(user.id);
    res.json({ user, token });
  } else {
    res.status(404);
    throw new Error('Неверный пароль или почта');
  }
});
