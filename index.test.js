import request from 'supertest';
import dotenv from 'dotenv';

// Mock environment variables
dotenv.config({ path: './.env.test' });

import app from './index.js'; // Import the app after setting the environment variables

describe('Express App', () => {
  it('should return 200 OK for /api/v1', async () => {
    const res = await request(app).get('/api/v1');
    expect(res.statusCode).toEqual(200);
  });

  it('should return 200 OK for /media/sample.txt', async () => {
    const res = await request(app).get('/media/sample.txt');
    expect(res.statusCode).toEqual(200);
  });

  it('should have CORS enabled', async () => {
    const res = await request(app).options('/api/v1');
    expect(res.headers['access-control-allow-origin']).toEqual('http://localhost:3000');
  });

  it('should parse JSON requests', async () => {
    const res = await request(app)
      .post('/api/v1')
      .send({ key: 'value' })
      .set('Content-Type', 'application/json');
    expect(res.statusCode).toEqual(200);
  });
});