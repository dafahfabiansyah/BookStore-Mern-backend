import express from 'express';
import mongoose from 'mongoose';
import { PORT, MongoDBURL } from './config.js';
import booksRouter from './router/booksRouter.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('Hello World!');
});

app.use('/books', booksRouter);

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting db', error);
  });
