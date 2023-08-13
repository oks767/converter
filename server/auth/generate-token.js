import jwt from 'jsonwebtoken';

export const generateToken = (userId) =>
  // jwt.sign({ userId }, `${import.meta.env.ACCES_TOKEN}`, { expiresIn: '10d' });
  jwt.sign({ userId }, process.env.ACCES_TOKEN, { expiresIn: '10d' });
