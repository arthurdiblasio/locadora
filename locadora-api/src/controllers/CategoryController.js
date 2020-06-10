const Category = require('../models/Category')

module.exports = {

    async index(req, res) {
        const categories = await Category.findAll();
        return res.json(categories);
    },

    async indexId(req, res) {
        const { category_id } = req.params;
        const categories = await Category.findByPk(category_id);
        return res.json(categories);
    },

    async store(req, res) {
        const { name } = req.body;
        const category = await Category.create({ name });
        return res.json(category);
    }
};