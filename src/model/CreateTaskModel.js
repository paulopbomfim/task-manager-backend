const { connect } = require('./connection');

module.exports = async (taskRequest) => {
  try {
    const db = await connect();

    const newTask = await db.collection('tasks').insertOne(taskRequest);

    const task = {
      id: newTask.insertedId,
      description: taskRequest.description,
      createdAt: taskRequest.createdAt,
      status: taskRequest.status,
    };

    return task;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};
