import express from 'express';

import uploads from './uploads/index.js';

const v1 = express.Router();

v1.use('/uploads', uploads);

export default v1;