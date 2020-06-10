const Movie = require('../models/Movie')

module.exports = {

    async index(req, res) {
        const movies = await Movie.findAll();
        return res.json(movies);
    },

    async store(req, res) {

        const { name, category_id, synopsis, rating_id, poster, cast } = req.body;

        const movie = await Movie.create({ name, category_id, synopsis, rating, poster, cast });

        return res.json(movie);
    }
};