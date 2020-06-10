const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Category = require('../models/Category');
const Movie = require('../models/Movie');
const Rating = require('../models/Rating');

const connection = new Sequelize(dbConfig);

Category.init(connection);
Movie.init(connection);
Rating.init(connection);

Movie.associate(connection.models)

module.exports = connection;