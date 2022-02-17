const model = require('../model');

module.exports = async (taskRequest) => {
  const newTask = await model.createTask(taskRequest);
  return newTask;
};
