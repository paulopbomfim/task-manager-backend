const service = require('../../service');
const { connect, disconnect } = require('../../model/connection');

describe('Create task service', () => {
  let db;
  beforeEach(async () => {
    db = await connect();
  });

  afterEach(async () => {
    await db.dropCollection('tasks');
    await disconnect();
  });

  it('should be able to call model and insert a task', async () => {
    const taskRequest = {
      description: 'Task description',
      createdAt: '2022-02-15T16:13:20.489Z',
      status: 'pending',
    };

    const newTask = await service.createTask(taskRequest);

    expect(newTask).toHaveProperty('id');
    expect(newTask.createdAt).toBe('2022-02-15T16:13:20.489Z');
  });
});
