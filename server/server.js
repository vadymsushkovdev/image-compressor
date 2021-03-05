const express = require('express');
const router = require('../config/router');

const app = express();

router.init(app);

app.set('port', 3001);

module.exports = app;
