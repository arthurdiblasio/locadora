const { Model, DataTypes } = require('sequelize');

class Rating extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
                sequelize
            })
    }
}

module.exports = Rating;