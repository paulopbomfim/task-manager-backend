const request = require('supertest');

const app = require('../../api/app');
const { connect, disconnect } = require('../../model/connection');

describe('Create task', () => {
  let db;
  beforeEach(async () => {
    db = await connect();
  });

  afterEach(async () => {
    await db.dropCollection('tasks');
    await disconnect();
  });

  it('should be able to create tasks using POST: "/tasks"', async () => {
    const response = await request(app).post('/tasks').send({
      description: 'Test description',
      createdAt: '2022-02-15T16:13:20.489Z',
      status: 'pending',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('createdAt');
  });
});
