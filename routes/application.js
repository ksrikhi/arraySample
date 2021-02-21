const express = require('express');
const application = express.Router();

const arrayComputation = require('../controller/application');

application.post("/calculation", arrayComputation)
module.exports = application;