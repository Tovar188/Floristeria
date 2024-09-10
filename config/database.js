const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('floristeria_db', 'root', 'MArimbas1', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
