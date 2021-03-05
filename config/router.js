const express = require('express');
const bodyParser = require('body-parser');
const AppRouter = require('../app/router');

module.exports = {
    async init(app) {
        const router = express.Router();

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(express.static('public'));

        app.use('', AppRouter);

        app.use(router);
    },
};
