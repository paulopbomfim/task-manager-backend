const service = require('../../service');

describe('Create task service', () => {
  it('should be able to call model and insert a task', async () => {
    const taskRequest = {
      description: 'Task description',
      createdAt: '2022-02-15T16:13:20.489Z',
      status: 'pending',
    };

    const newTask = service.createTask(taskRequest);

    expect(newTask).toHaveProperty('id');
    expect(newTask.createdAt).toBe('2022-02-15T16:13:20.489Z');
  });
});
