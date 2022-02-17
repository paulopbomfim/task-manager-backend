const express = require('express');

const controller = require('../controller');

const app = express();
app.use(express.json());

app.get('/', (_req, res) => res.send());

app.post('/tasks', controller.createTask);

module.exports = app;
