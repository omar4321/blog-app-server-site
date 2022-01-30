import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
const PORT = 5000;
//dotenv
dotenv.config();
const app = express();
import Router from './routes/route.js';

//connect mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('db connect successfull');
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

//isten
app.listen(process.env.PORT || PORT, () => {
  console.log(`Backend server is running  on PORT ${PORT}`);
});
