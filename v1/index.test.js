import request from 'supertest';
import app from '../index.js';

describe('API v1 Routes', () => {
  it('should return 200 OK for GET /api/v1', async () => {
    const res = await request(app).get('/api/v1');
    expect(res.statusCode).toEqual(200);
  });

  it('should return 200 OK for POST /api/v1', async () => {
    const res = await request(app)
      .post('/api/v1')
      .send({ key: 'value' })
      .set('Content-Type', 'application/json');
    expect(res.statusCode).toEqual(200);
  });
});