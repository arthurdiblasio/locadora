const Rating = require('../models/Rating')

module.exports = {

    async index(req, res) {
        const ratings = await Rating.findAll();
        return res.json(ratings);
    },

    async indexId(req, res) {
        const { rating_id } = req.params;
        const rating = await Rating.findByPk(rating_id);
        return res.json(rating);
    },

    async store(req, res) {
        const { name } = req.body;
        const rating = await Rating.create({ name });
        return res.json(rating);
    }
};