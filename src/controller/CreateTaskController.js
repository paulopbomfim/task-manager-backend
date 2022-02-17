const service = require('../service');

module.exports = async (request, response) => {
  const { description, createdAt, status } = request.body;

  const newTask = await service.createTask({ description, createdAt, status });

  return response.status(201).json(newTask);
};
