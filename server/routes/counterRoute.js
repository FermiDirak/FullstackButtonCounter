import express from 'express';

const counterRoute = express.Router();

counterRoute.get('/', (req, res) => {
  res.send('hello world');
});

counterRoute.post('/', (req, res) => {
  res.send('post hello world');
});

export default counterRoute;