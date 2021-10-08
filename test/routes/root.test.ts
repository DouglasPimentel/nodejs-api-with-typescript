import supertest from 'supertest';
import app from '../../src/app';

describe('Root route test', () => {
  it('should return message hello world', async () => {
    const response = await supertest(app.callback()).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello World!' });
  });
});
