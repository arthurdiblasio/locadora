'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('movies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      synopsis: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rating_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'ratings', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      poster: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cast: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('movies');
  }
};
