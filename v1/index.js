import express from 'express';

import uploads from './uploads/index.js';

const v1 = express.Router();

v1.get('/', (req, res) => {
  res.status(200).send('GET request to the homepage');
});

v1.post('/', (req, res) => {
  res.status(200).json(req.body);
});

v1.use('/uploads', uploads);

export default v1;