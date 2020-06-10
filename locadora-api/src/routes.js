const express = require('express');

const CategoryController = require('./controllers/CategoryController');
const RatingController = require('./controllers/RatingController');
const MovieController = require('./controllers/MovieController');

const routes = express.Router();

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);

routes.get('/ratings', RatingController.index);
routes.get('/ratings/:rating_id', RatingController.index);
routes.post('/ratings', RatingController.store);

routes.get('/movies', MovieController.index);
routes.post('/movies', MovieController.store);

module.exports = routes;