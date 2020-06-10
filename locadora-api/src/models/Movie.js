const { Model, DataTypes } = require('sequelize');

class Movie extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            synopsis: DataTypes.STRING,
            poster: DataTypes.STRING,
            cast: DataTypes.STRING,
        }, {
                sequelize
            })
    }

    static associate(models) {
        this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' });
        this.belongsTo(models.Rating, { foreignKey: 'rating_id', as: 'rating' });
    }
}

module.exports = Movie;