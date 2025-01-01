import request from 'supertest';
import express from 'express';
import v1 from './index.js';

const app = express();
app.use(express.json());
app.use('/api/v1', v1);

describe('v1 Router', () => {
  it('should respond with 200 on GET /api/v1', async () => {
    const response = await request(app).get('/api/v1');
    expect(response.status).toBe(200);
    expect(response.text).toBe('GET request to the homepage');
  });

  it('should respond with 200 on POST /api/v1', async () => {
    const response = await request(app).post('/api/v1').send({ key: 'value' });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ key: 'value' });
  });
});