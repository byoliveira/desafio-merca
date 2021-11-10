'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
   return queryInterface.createTable('contacts', { 
     id: {
        type: Sequelize.INTEGER,
        alloNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        alloNull: false
      },
      celular: {
        type: Sequelize.STRING,
        alloNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down:  (queryInterface) => {
    return queryInterface.dropTable('contacts');     
 },
};