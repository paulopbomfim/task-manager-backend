const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tasks';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_DB_URL, OPTIONS);

async function connect() {
  await client.connect();
  const db = client.db(DB_NAME);
  return db;
}

async function disconnect() {
  await client.close();
}

module.exports = { connect, disconnect };
