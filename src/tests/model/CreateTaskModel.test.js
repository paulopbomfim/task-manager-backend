const model = require('../../model');
const { connect, disconnect } = require('../../model/connection');

describe('Create task model', () => {
  let db;
  beforeEach(async () => {
    db = await connect();
  });

  afterEach(async () => {
    await db.dropCollection('tasks');
    await disconnect();
  });

  it('should be able to insert a task into database', async () => {
    const taskRequest = {
      description: 'Task description',
      createdAt: '2022-02-15T16:13:20.489Z',
      status: 'pending',
    };

    await model.createTask(taskRequest);

    const newTaskInDb = await db.collection('tasks').find().toArray();

    expect(newTaskInDb[0]).toHaveProperty('_id');
    expect(newTaskInDb[0].createdAt).toBe('2022-02-15T16:13:20.489Z');
  });
});
