const routes = require('express').Router();

const myController = require('../controller');

routes.get('/', myController.awesomeFunc );

module.exports = routes;