import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import { prisma } from './prisma.js';
import routerAuth from './routes/routes.js';
import cors from 'cors';

const app = express();
// const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// const start = async () => {
//   try {
//     app.listen(PORT, () => console.log(`server is started on ${PORT}`));
//   } catch (e) {
//     console.log(e);
//   }
// };
// // start();
async function start() {
  if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
  app.use(cors());
  app.use(express.json());

  // const __dirname = path.resolve();
  // app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

  app.use('/api/auth', routerAuth);
  app.use('/api/register', routerAuth);
  // app.use('/api/users', userRoutes);
  // app.use('/api/exercises', exersiceRoutes);
  // app.use('/api/workouts', workoutRoutes);
  // app.use(notFound);
  // app.use(errorHandler);
  const PORT = process.env.PORT || 5000;
  app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  );
}

start()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
