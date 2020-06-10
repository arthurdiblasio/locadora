const Movie = require('../models/Movie')

module.exports = {

    async index(req, res) {
        const movies = await Movie.findAll();
        console.log(movies);

        return res.json(movies);
    },

    async indexId(req, res) {

        const { movie_id } = req.params;

        const movie = await Movie.findByPk(movie_id);


        if (!movie) {
            return {};
        }
        return res.json(movie);
    },

    async deleteId(req, res) {

        const { movie_id } = req.params;

        const movie = await Movie.destroy({
            where: {
                id: movie_id
            }
        });

        if (movie == 1) {
            return res.json();
        }



        return res.json({ error: 'Não existe um filme com o id indicado' });
    },

    async store(req, res) {

        const { name, category_id, synopsis, rating_id, poster, cast } = req.body;
        const movie = await Movie.create({ name, category_id, synopsis, rating_id, poster, cast });
        return res.json(movie);
    }
};