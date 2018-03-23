import express  from 'express';
import mongoose from 'mongoose';
import routes   from './routes';

const app = express();

mongoose.connect('mongodb://localhost/counter')
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

app.use('/api/v1', routes);

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});